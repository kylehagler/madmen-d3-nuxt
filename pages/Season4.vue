<template>
  <div>
    <Header activeSeason="4" />
    <chart :seasonData="this.seasonData"></chart>
  </div>
</template>


<script>
import Header from '~/components/Header.vue'
import Chart from '~/components/Chart.vue';

export default {
  components: {
  	Header,
    Chart
  },
  data() {
      return {
        "seasonData" : [
		 {
		   "episode": 5,
		   "type": "book",
		   "title": "The Twenty-One Balloons",
		   "author": "William Pène DuBois",
		   "year": 1947,
		   "display_year": 1947
		 },
		 {
		   "episode": 5,
		   "type": "book",
		   "title": "The Chrysanthemum and the Sword",
		   "author": "Ruth Benedict",
		   "year": 1946,
		   "display_year": 1946
		 },
		 {
		   "episode": 5,
		   "type": "book",
		   "title": "The Horse That Liked Sandwiches",
		   "author": "Vivian L. Thompson",
		   "year": 1962,
		   "display_year": 1962
		 },
		 {
		   "episode": 9,
		   "type": "book",
		   "title": "The Clue of the Black Keys",
		   "author": "Carolyn Keene",
		   "year": 1951,
		   "display_year": 1951
		 },
		 {
		   "episode": 10,
		   "type": "book",
		   "title": "The Miracle Worker",
		   "author": "William Gibson",
		   "year": 1959,
		   "display_year": 1959
		 },
		 {
		   "episode": 11,
		   "type": "book",
		   "title": "Meeting with Japan",
		   "author": "Fosco Maraini",
		   "year": 1960,
		   "display_year": 1960
		 },
		 {
		   "episode": 11,
		   "type": "book",
		   "title": "Games People Play: The Psychology of Human Relationships",
		   "author": "Eric Berne",
		   "year": 1965,
		   "display_year": 1964
		 },
		 {
		   "episode": 11,
		   "type": "book",
		   "title": "Sterling's Gold",
		   "author": "Roger Sterling",
		   "year": 2010,
		   "display_year": 2010
		 },
		 {
		   "episode": 13,
		   "type": "book",
		   "title": "You Are Not the Target: A Practical Manual of How to Cope with a World of Bewildering Change",
		   "author": "Laura Archera Huxley",
		   "year": 1961,
		   "display_year": 1963
		 },
		 {
		   "episode": 13,
		   "type": "book",
		   "title": "Gazella",
		   "author": "Stuart Cloete",
		   "year": 1958,
		   "display_year": 1958
		 },
		 {
		   "episode": 13,
		   "type": "book",
		   "title": "The Spy Who Came in From the Cold",
		   "author": "John Le Carré",
		   "year": 1963,
		   "display_year": 1963
		 },
		 {
		   "episode": 13,
		   "type": "book",
		   "title": "The Adventures of Huckleberry Finn",
		   "author": "Mark Twain",
		   "year": 1884,
		   "display_year": 1884
		 }
		]
      }
    }
}
</script>
