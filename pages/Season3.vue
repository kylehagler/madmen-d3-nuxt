<template>
  <div>
    <Header activeSeason="3" />
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
		   "episode": 2,
		   "type": "book",
		   "title": "The Compact Edition of the Oxford English Dictionary",
		   "author": "-",
		   "year": 1971,
		   "display_year": 1971
		 },
		 {
		   "episode": 3,
		   "type": "book",
		   "title": "The History of the Decline and Fall of the Roman Empire",
		   "author": "Edward Gibbon",
		   "year": 1776,
		   "display_year": 1776
		 },
		 {
		   "episode": 6,
		   "type": "book",
		   "title": "The Adventures of Tom Sawyer",
		   "author": "Mark Twain",
		   "year": 1876,
		   "display_year": 1876
		 },
		 {
		   "episode": 7,
		   "type": "book",
		   "title": "Confessions of an Advertising Man",
		   "author": "David Ogilvy",
		   "year": 1963,
		   "display_year": 1963
		 },
		 {
		   "episode": 7,
		   "type": "book",
		   "title": "Be My Guest",
		   "author": "Conrad Hilton",
		   "year": 1957,
		   "display_year": 1957
		 },
		 {
		   "episode": 10,
		   "type": "book",
		   "title": "The Group",
		   "author": "Mary McCarthy",
		   "year": 1965,
		   "display_year": 1963
		 },
		 {
		   "episode": 10,
		   "type": "book",
		   "title": "Helping Yourself with Psychiatry",
		   "author": "Frank Caprio",
		   "year": 1957,
		   "display_year": 1957
		 },
		 {
		   "episode": 10,
		   "type": "book",
		   "title": "Set Theory and Logic",
		   "author": "Robert Stoll",
		   "year": 1963,
		   "display_year": 1963
		 },
		 {
		   "episode": 10,
		   "type": "book",
		   "title": "Meeting with Japan",
		   "author": "Fosco Maraini",
		   "year": 1960,
		   "display_year": 1960
		 },
		 {
		   "episode": 10,
		   "type": "book",
		   "title": "The Corps",
		   "author": "W.E.B. Griffin",
		   "year": 1986,
		   "display_year": 1986
		 }
		]
      }
    }
}
</script>
