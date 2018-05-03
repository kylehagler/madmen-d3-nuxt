<template>
  <div>
    <nuxt/>
    <div class="footer">
        <p>"Make it simple, but significant." &mdash;Don Draper</p>
    </div>
  </div>
</template>

<script>
import Header from './../components/Header.vue';

export default {
  components: {
    Header
  }
}

</script>

<style>
html,
body {
  min-height: 100%;
  font-family: 'acumin-pro-condensed';
  padding: 0;
  margin: 0;
}

body {
  background-color: #ac3650;
}

.tooltip {
  position: absolute;
  pointer-events: none;
  background: #000;
  color: #fff;
  padding: 6px 10px 10px;
  transition: all 0.2s ease-in-out;
}

.axis path,
.axis line {
  fill: none;
  stroke: #e7eef1;
  shape-rendering: crispEdges;
}

#chart {
  /*width: 1000px;*/
  margin: 0 auto 0;
  padding: 0 0 20px 42px;
  font-family: "acumin-pro";
  font-weight: 100;
}

.fallingman {
  width: 100px;
  cursor: pointer;
  fill: #000;

}

.book-title {
  font-weight: bold;
}

.footer p {
  font-family: "acumin-pro";
  text-align: center;
  color: #000;
  font-weight: 100;
  font-size: 24px;
  margin-top: 0;
}

@media(max-width: 768px) {
  .footer p  {
    font-size: 18px;
  }
}
</style>
