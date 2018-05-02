<template>
  <div>
    <div class="semipolar-spinner" :style="spinnerStyle">
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
    </div>
    
    <div id="chart"></div>
  </div>
</template>

<script>
  import * as d3 from 'd3';
  import { TimelineMax } from 'gsap';
  import * as $ from 'jquery';
  
  export default {
    mounted() {
      
      var chart = $('#chart');
      
      var tl = new TimelineMax;
      
      tl.from(chart, 3, { autoAlpha: 0 } );
      
      $('.semipolar-spinner').remove();
      
      var margin = { top: 50, right: 20, bottom: 30, left: 50 },
        width = 960 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;
      
      // setup x
      var xValue = function(d) {
          return d.episode;
        },
        xScale = d3.scale.linear().range([0, width]),
        xMap = function(d) {
          return xScale(xValue(d)) - 20;
        },
        xAxis = d3.svg
          .axis()
          .scale(xScale)
          .orient('bottom');

      // setup y
      var yValue = function(d) {
          return d.year;
        },
        yScale = d3.scale.linear().range([height, 0]),
        yMap = function(d) {
          return yScale(yValue(d)) - 50;
        }, // data -> display
        yAxis = d3.svg
          .axis()
          .scale(yScale)
          .orient('left')
          .ticks(10)
          .tickFormat(d3.format('d'));

      // add the graph canvas to the chart div
      var svg = d3
        .select('#chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      // add the tooltip area to the webpage
      var tooltip = d3
        .select('body')
        .append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);

      this.seasonData.forEach(function(d, i) {
        d.episode = +d.episode;
        d.year = +d.year;
      });

      // don't want dots overlapping axis, so add in buffer to data domain
      xScale.domain([0, 13]);
      yScale.domain([d3.min(this.seasonData, yValue) - 10, d3.max(this.seasonData, yValue) + 5]);

      // x-axis
      svg
        .append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis)
        .style('fill', '#e7eef1')
        .append('text')
        .attr('class', 'label')
        .style('fill', '#000')
        .attr('x', width)
        .attr('y', -6)
        .style('text-anchor', 'end')
        .text('Episode #');
        
    d3.select('.x').select('path')
        .style({ 'stroke': '#e7eef1', 'fill': 'none', 'stroke-width': '1px'});    

      // y-axis
      svg
        .append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .style('fill', '#e7eef1')
        .append('text')
        .attr('class', 'label')
        .style('fill', '#000')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text('Pub. Date');
        
      d3.select('.y').select('path')
        .style({ 'stroke': '#e7eef1', 'fill': 'none', 'stroke-width': '1px'})   

      // draw falling men
      var man = svg
        .append('g')
        .selectAll('.fallingman')
        .data(this.seasonData)
        .enter()
        .append('svg')
        .attr('class', 'fallingman')
        .attr('viewBox', '0 0 900 650')
        .attr('width', '150')
        .attr('height', '165')
        .attr('x', xMap)
        .attr('y', yMap)
        .on('mouseover', function(d) {
          tooltip
            .transition()
            .duration(200)
            .style('opacity', 1);
          tooltip
            .html('<span class="book-title">' + d.title + '</span>' + '<br/>' + d.author + ' (Pub. ' + d.display_year + ')<br>')
            .style('left', d3.event.pageX + 20 + 'px')
            .style('top', d3.event.pageY - 28 + 'px');
        })
        .on('mouseout', function(d) {
          tooltip
            .transition()
            .duration(500)
            .style('opacity', 0);
        });
      
      man.append('path')
        .attr('fill', '#fff')
        .attr('d', 'M108.633 138.424l59.08-24.085 24.98 61.273-59.08 24.086z');

      man.append('path')
        .attr(
          'd',
          'M15.56 288.82a1 1 0 0 1-.1-1.5c1.5-2.1 2.9-4.3 4.4-6.4a1.79 1.79 0 0 0-1.5-2.7c-2.4-.2-4.7-.6-7.1.4a36.75 36.75 0 0 1-5.7 1.5c-1.2.3-2.2-.3-2.1-1.3a1.65 1.65 0 0 1 .8-1.3c2-.9 4.1-1.6 6.2-2.4a5.48 5.48 0 0 0 1.5-.8 12.49 12.49 0 0 0 .8-1.2 7.54 7.54 0 0 0-1.3-.6 5.7 5.7 0 0 0-1.3.1l-5.7 1.2a11.5 11.5 0 0 0-1.7.6c-1.1.4-1.9.2-2.3-.8s-.1-1.5 1.1-1.9c2.6-.8 5.1-1.4 7.7-2.2a3.81 3.81 0 0 0 1.5-.5 2.84 2.84 0 0 0 .8-1.1c-.4-.2-.8-.7-1.2-.7a25.66 25.66 0 0 0-8.7.7c-.8.2-1.4.1-1.6-.7a1.36 1.36 0 0 1 1-1.8 40.74 40.74 0 0 1 6.8-1.3c3.2-.1 6.4.2 9.7.3a3.55 3.55 0 0 0 1.3-.3c.1-.7.3-1.6-.1-2.1a10 10 0 0 0-5.7-3.9 5.25 5.25 0 0 1-3.5-3.3c-.3-.7-.1-1.3.8-1.3a6.61 6.61 0 0 1 2.5.3c5.2 2.1 10.3 4.2 15.5 6.4 1.3.5 2.4 1.4 3.7 1.8a8.79 8.79 0 0 0 3.6-.1 2.36 2.36 0 0 1 2.4 1.1 14.48 14.48 0 0 1 2.8 7.8v1.8c0 .7-.4 1-1.1 1.3a11.09 11.09 0 0 0-3 1.7 22.37 22.37 0 0 1-9.4 4.6 8 8 0 0 0-4.5 3.2c-1.3 1.5-2.6 2.9-4 4.3a11.8 11.8 0 0 1-1.8 1.3 4.72 4.72 0 0 0-1.5-.2zm135.6-204a5.7 5.7 0 0 1-.1 1.3 32.81 32.81 0 0 1-.5 6.3 45.92 45.92 0 0 1-2.7 6 19.23 19.23 0 0 0-1.2 2.5c-.5 1.4-.9 2.9-1.4 4.3-.1.4-.5.6-.8.9a3.51 3.51 0 0 1-.8-1 12.25 12.25 0 0 1-.2-1.9c-.4-2.8-.9-5.6-1.3-8.4a.52.52 0 0 0-.2-.4c-.6-2.4-1.1-4.7-1.7-7.1a34.07 34.07 0 0 1-1.2-8.4c0-.3-.2-.6-.2-.9-.6-2.3-1.2-4.5-1.8-6.8s-1.1-4.7-1.8-7.1c-1.2-3.9-2.4-7.8-3.8-11.7-1.3-3.6-4.4-5-7.8-5.9-2.3-.6-4.3.6-6.3 1.3a13.1 13.1 0 0 0-3.3 2.1 60.27 60.27 0 0 0-5.2 3.6 10 10 0 0 1-7.1 2.6c-2.2-.1-3.2-.9-3.6-3-.3-1.5-.2-3.1-1.1-4.5s-1.2-2.7-2-4a9 9 0 0 0-3.6-3.1 4.73 4.73 0 0 0-6.4 1.5c-1.3 2.2-.8 4.7-.9 7.1-.2 4.4 1.6 8.6 2.1 12.9.2 1.9.9 3.8-.5 5.6-.2.2-.1.7-.1 1 .2 2.5.5 4.9.8 7.4.2 2 1.3 2.9 3.3 3a33.14 33.14 0 0 0 4.4.2 7.1 7.1 0 0 0 2.9-.5c1.9-.9 3.7-2.1 5.7-2.9 2.5-1 3.8-.2 3.7 2.6a14.89 14.89 0 0 0 .8 4.1 42.74 42.74 0 0 1 1.3 4.8c.4 4 .7 8 1 12 .1 1.9.3 3.8.4 5.7s-2.8 4.1-4.6 3.5a1.34 1.34 0 0 1-.7-.6c-.9-1-1.8-2-2.8-3-1.7-1.8-3.6-3.4-5.1-5.3-2.6-3.3-5.1-6.8-7.5-10.3a23 23 0 0 0-5.2-6c-1.2-.8-2.3-1.7-3.4-2.6a22.91 22.91 0 0 1-2.1-2.3 35.94 35.94 0 0 1-3.8-4 26.71 26.71 0 0 1-3.5-7.2c-2-5.9-4.2-11.8-6.4-17.6-.5-1.3-1-2.5-1.6-3.7-1.1-2.2-2.9-3.6-4.7-5.2a6.91 6.91 0 0 1-2.6-4.5 20.91 20.91 0 0 0-2-7.7 22.59 22.59 0 0 1-1.1-3.7c-.1-.4-.4-1-.8-1.1-2-.5-2.4-2-2.5-3.6-.3-4.5-.4-8.9-.6-13.4a7.72 7.72 0 0 0-.2-1.5c-.5-1.5-1.1-3-1.7-4.5a2.83 2.83 0 0 0-3.5-1.6 26.26 26.26 0 0 0-8.3 4.3c-3.2 2.6-4.9 5.8-3.9 9.9a36.81 36.81 0 0 0 1.8 5.3c.5 1.3 1.1 2.5 1.7 3.7a38 38 0 0 0 2.6 4.9 3 3 0 0 1 .3 2.9 2.21 2.21 0 0 0 0 1.6 38.08 38.08 0 0 0 1.5 4.4c.6 1.6 1.4 3.2 2.1 4.7.3.5.9.8 1.1 1.4a58.44 58.44 0 0 1 2 5.9c.5 2.1.8 4.3 1.2 6.5a13.27 13.27 0 0 0 .3 2.1c1.1 2.6 2.4 5 3.3 7.6a29.78 29.78 0 0 1 2.1 8.3 26.07 26.07 0 0 0 1.4 6 43.56 43.56 0 0 1 1.7 5.1c.5 2.6.7 5.2 1.1 7.8a5.34 5.34 0 0 0 .5 1.8c1.2 1.8 2.5 3.6 3.7 5.4a65.77 65.77 0 0 1 3.8 5.4 42.28 42.28 0 0 1 2.3 4.8c1 1.9 2 3.8 2.9 5.8a20.54 20.54 0 0 0 3.8 5.9 1.91 1.91 0 0 1 .3 2.6c-1.1 1.4-1 2.9-1.1 4.4a4.43 4.43 0 0 0 1.1 3.9c1.2 1.1 2.4 2.2 3.5 3.4 2 2.1 4 4.2 6.1 6.2 3.1 3 6.4 5.7 9.2 9s5.2 7.1 7.8 10.7c1.6 2.2 3.2 4.5 4.9 6.7 2.3 2.8 4.8 5.4 7 8.2a15.8 15.8 0 0 1 3 10.5 30.54 30.54 0 0 1-3 11.1c-2.3 5-4.7 9.9-7.3 14.8-1.7 3.2-3.6 6.2-5.5 9.2-2.1 3.3-4.5 6.4-6.7 9.7a26.91 26.91 0 0 1-14.1 10.3c-7.3 2.5-14.7 4.7-22.1 6.9-5 1.5-10.1 2.6-15.1 3.9-1.9.5-3.7.8-5.6 1.3-1.3.3-1.9 1.1-1.6 2.1.4 1.5 1.3.7 2.1.4 1.2-.4 2.6-.7 3.4.2a13.64 13.64 0 0 1 2.9 4.7 52.32 52.32 0 0 1 2.2 9.5c.4 2.6 1 5.6-2.7 6.8-.8.3-.9 1.1-.1 1.6a3.51 3.51 0 0 0 1.6.6 17.29 17.29 0 0 0 3.1-.7c1.8-.6 3.5-1.4 5.2-2.1 13.2-5.2 26.7-9.4 39.3-16.1 3.5-1.9 6.9-3.8 10.3-5.9 2.6-1.6 4.9-3.4 7.4-5.1 2.3-1.6 4.6-3.2 6.8-4.9 2.8-2.1 5.6-4.3 8.4-6.5a31.52 31.52 0 0 0 7.9-8.4 63 63 0 0 1 3.7-5.3c2.6-3.3 6-5.6 9.5-7.8a9.58 9.58 0 0 1 3.1-1.4c2.6-.5 5.2-.7 7.8-1.1a7.37 7.37 0 0 0 1.4-.4c.8-.3 1.6-.7 2.4-1 1.2-.5 1.5-.2 2.1 1a8.88 8.88 0 0 0 1.6 2.2c.3.3 1 .3 1.4.6 2.3 2 4.4 4.2 7.2 5.6 1.7.9 3.3 2 5.4 1.9 1.8-.1 3.7 0 5.5 0a11.2 11.2 0 0 0 7-2.6 21.42 21.42 0 0 0 6.4-7.3 15.06 15.06 0 0 0 1.2-9.1c-.2-1.5-.1-3.1-1.1-4.5a37.13 37.13 0 0 1-2.8-4.1 2.14 2.14 0 0 1-.1-1.9 33.21 33.21 0 0 1 3.7-3.8c1.8-1.5 3.8-2.9 5.6-4.4 1.6-1.3 3.3-2.5 4.9-3.8 1.8-1.3 3.6-2.5 5.4-3.8s3.6-2.5 5.5-3.7a8.26 8.26 0 0 0 3.5-3.9c.4-1.1.7-2.2 1.2-3.3a21.43 21.43 0 0 1 3.7-6.4 12.33 12.33 0 0 0 3.6-8.2c.4-4.5 1.8-8.7 3.1-12.9 1-3.6 2.5-7 3.7-10.6.7-2.1 1.1-4.3 1.7-6.4.4-1.5 1.1-2.9 1.6-4.4.7-2.3.1-3.7-1.8-5.2a18.33 18.33 0 0 0-3.8-2.3c-2.6-1-5.2-2.1-8.1-2.2a1.56 1.56 0 0 0-1.8 1.2c-.9 2.6-1.8 5.2-2.6 7.8-.4 1.1-.8 2.3-1.1 3.4-.8 2.8-1.6 5.7-2.2 8.5a22.26 22.26 0 0 1-2.7 7.6 29.09 29.09 0 0 0-2.5 4.2 14.67 14.67 0 0 1-3.8 5.7c-1.9 1.7-3.7 3.3-6.5 2.6a33.92 33.92 0 0 0-4.4-.8 39.51 39.51 0 0 1-12.3-2.4 6.39 6.39 0 0 1-3.7-3.5c-1-2.8-1.6-5.7-2.4-8.6s-1.5-5.9-2.3-8.8c-.3-1-.7-2-1.1-3-.6-1.2-1.2-2.4-1.9-3.7-1.2-2.4-2.3-5-3.7-7.3a90.2 90.2 0 0 0-5.5-8.2c-2.5-3.3-5.3-6.5-8-9.6-2.6-2.9-5.1-5.9-6.3-9.7a4.7 4.7 0 0 0-.6-.9c.5.1.3.1.2.2zm-3.6 48.5a31.92 31.92 0 0 1 7 5.6 26.82 26.82 0 0 0 5.4 4.7 30.65 30.65 0 0 0 6.8 2.5c1.6.5 3.2.9 4.8 1.4a25.82 25.82 0 0 0 2.6.8 2.47 2.47 0 0 1 2.1 2.8 37.26 37.26 0 0 0 1.4 12c1.3 4.8 2.7 9.5 4 14.3.6 2.2 1.1 4.5 1.7 6.8a6.7 6.7 0 0 1-5.6-4.4 16.64 16.64 0 0 0-1.3-2.7 2.12 2.12 0 0 0-2.8-.1 2.48 2.48 0 0 1-2.6.5c-3-.7-5.9-1.4-8.8-2.1-1-.2-1.9-.6-2.1-1.7a4.72 4.72 0 0 0-2.3-3.4 7.7 7.7 0 0 1-2.8-3.9c-1.7-4.2-3.3-8.5-4.9-12.7-1.3-3.5-2.7-7.1-3.9-10.7a53.75 53.75 0 0 1-2.6-10.5c.1-.1.2-.3.3-.4a21.72 21.72 0 0 1 3.6 1.2zm-8.4 9.9a106.17 106.17 0 0 0 4.3 11.1 58.9 58.9 0 0 0 8.1 12.8 29.77 29.77 0 0 1 2.3 2.7 4 4 0 0 1 .3 1.9 24.37 24.37 0 0 0-.1 2.7 7.07 7.07 0 0 1-.8 3.4 5 5 0 0 0-.9 4.2 20.18 20.18 0 0 1 .1 3.5c.1 1.5.2 3 .3 4.6a2.94 2.94 0 0 1-2.5-2c-1.3-3.1-2.7-6.2-4.1-9.3s-2.9-6-4.4-9a14.68 14.68 0 0 0-5.2-5.3l-13.8-9c-.8-.5-1.6-1.1-2.4-1.5-1.6-.8-1.7-2.6-2.6-3.8-1.3-1.9-2.8-3.8-4.3-5.6-.5-.6-.6-1-.1-1.6a10.42 10.42 0 0 0 1-1.8 9.41 9.41 0 0 1 3.8-3.6c4.3-2.4 8.8-4.4 13.7-4.9a8.8 8.8 0 0 0 1.5-.5 25 25 0 0 0 2.6-.7c1 4.1 2 7.9 3.2 11.7zm92.2-43.3a2.18 2.18 0 0 1-.7.9c-1.8.2-3.7.3-5.1-1.3a2 2 0 0 0-1.2-.6 1.43 1.43 0 0 0-1.1.5 1.08 1.08 0 0 0 0 1.1 29.77 29.77 0 0 0 3.1 4.5c1.5 1.7 3.1 3 5.7 3a10.54 10.54 0 0 1 6.9 3c.7.7 1.2.7 1.9 0 2-1.9 3.4-4.1 3.4-6.9a8.59 8.59 0 0 1 2.3-5.6c.2-.2.5-.4.5-.7a3.33 3.33 0 0 0-.1-1.4c-.4 0-1-.1-1.3.2-.7.4-1.2 1.1-1.8 1.5a3.59 3.59 0 0 1-1.8.2 5.65 5.65 0 0 1 0-1.3c.1-.4.3-.7.4-1.1a11.43 11.43 0 0 0 0-3.2c-.1-.4-.8-.6-1.2-.9a3.53 3.53 0 0 0-.8 1.3 10.55 10.55 0 0 1-.5 1.9c-.2.4-.8.6-1.2.9-.2-.4-.6-.9-.5-1.3a3.77 3.77 0 0 0-1.9-3.9 6.11 6.11 0 0 0-1.3-.3 3 3 0 0 0-.2 1.3c.2.8.7 1.6.9 2.5a4.4 4.4 0 0 1-.2 1.6 14 14 0 0 1-1.6-1c-.1-.1-.1-.3-.2-.4-1.1-1.2-1.7-3-3.4-3.5a7.52 7.52 0 0 0-1.5 0 5.73 5.73 0 0 0 .4 1.4c1.2 1.9 2.7 3.7 2.5 6.1a3.07 3.07 0 0 0-.4 1.5z'
        );

        var svgs = $('.fallingman');

        svgs.each(function(index, svg) {
          var finishPosition = svg.getAttribute('y');
          svg.setAttribute('y', finishPosition - 570);

          var tl = new TimelineMax();

          tl.to(svg, 4, { attr: { y: finishPosition } });
        });
    },
    props: ["seasonData"],
  }
</script>

<style scoped>
.semipolar-spinner, .semipolar-spinner * {
      box-sizing: border-box;
    }

    .semipolar-spinner {
      height: 65px;
      width: 65px;
      position: relative;
      margin: 50px auto 0;
    }

    .semipolar-spinner .ring {
      border-radius: 50%;
      position: absolute;
      border: calc(65px * 0.05) solid transparent;
      border-top-color: #000;
      border-left-color: #000;
      animation: semipolar-spinner-animation 2s infinite;
    }

    .semipolar-spinner .ring:nth-child(1) {
      height: calc(65px - 65px * 0.2 * 0);
      width: calc(65px - 65px * 0.2 * 0);
      top: calc(65px * 0.1 * 0);
      left: calc(65px * 0.1 * 0);
      animation-delay: calc(2000ms * 0.1 * 4);
      z-index: 5;
    }

    .semipolar-spinner .ring:nth-child(2) {
      height: calc(65px - 65px * 0.2 * 1);
      width: calc(65px - 65px * 0.2 * 1);
      top: calc(65px * 0.1 * 1);
      left: calc(65px * 0.1 * 1);
      animation-delay: calc(2000ms * 0.1 * 3);
      z-index: 4;
    }

    .semipolar-spinner .ring:nth-child(3) {
      height: calc(65px - 65px * 0.2 * 2);
      width: calc(65px - 65px * 0.2 * 2);
      top: calc(65px * 0.1 * 2);
      left: calc(65px * 0.1 * 2);
      animation-delay: calc(2000ms * 0.1 * 2);
      z-index: 3;
    }

    .semipolar-spinner .ring:nth-child(4) {
      height: calc(65px - 65px * 0.2 * 3);
      width: calc(65px - 65px * 0.2 * 3);
      top: calc(65px * 0.1 * 3);
      left: calc(65px * 0.1 * 3);
      animation-delay: calc(2000ms * 0.1 * 1);
      z-index: 2;
    }

    .semipolar-spinner .ring:nth-child(5) {
      height: calc(65px - 65px * 0.2 * 4);
      width: calc(65px - 65px * 0.2 * 4);
      top: calc(65px * 0.1 * 4);
      left: calc(65px * 0.1 * 4);
      animation-delay: calc(2000ms * 0.1 * 0);
      z-index: 1;
    }

    @keyframes semipolar-spinner-animation {
      50% {
        transform: rotate(360deg) scale(0.7);
      }
    }

</style>
