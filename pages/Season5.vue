<template>
  <div>
    <Header activeSeason="5" />
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
		   "episode": 1,
		   "type": "book",
		   "title": "Johnny Got His Gun",
		   "author": "Dalton Trumbo",
		   "year": 1939,
		   "display_year": 1939
		 },
		 {
		   "episode": 1,
		   "type": "book",
		   "title": "The Sand Pebbles",
		   "author": "Richard McKenna",
		   "year": 1962,
		   "display_year": 1962
		 },
		 {
		   "episode": 1,
		   "type": "book",
		   "title": "A Thousand Days / John F. Kennedy in the White House",
		   "author": "Arthur Schlesinger",
		   "year": 1965,
		   "display_year": 1965
		 },
		 {
		   "episode": 3,
		   "type": "book",
		   "title": "Mein Kampf",
		   "author": "Adolph Hitler",
		   "year": 1925,
		   "display_year": 1925
		 },
		 {
		   "episode": 3,
		   "type": "book",
		   "title": "Sterling's Gold",
		   "author": "Roger Sterline",
		   "year": 2010,
		   "display_year": 2010
		 },
		 {
		   "episode": 4,
		   "type": "book",
		   "title": "Where Love Has Gone",
		   "author": "Harold Robbins",
		   "year": 1962,
		   "display_year": 1962
		 },
		 {
		   "episode": 6,
		   "type": "book",
		   "title": "The Tibetan Book of the Dead",
		   "author": "-",
		   "year": 1927,
		   "display_year": 1927
		 },
		 {
		   "episode": 6,
		   "type": "book",
		   "title": "The Life of Greece",
		   "author": "Will Durant",
		   "year": 1939,
		   "display_year": 1939
		 },
		 {
		   "episode": 7,
		   "type": "book",
		   "title": "The Fixer",
		   "author": "Bernard Malamud",
		   "year": 1966,
		   "display_year": 1966
		 },
		 {
		   "episode": 7,
		   "type": "book",
		   "title": "The Berlitz Self-Teacher: French",
		   "author": "-",
		   "year": 1949,
		   "display_year": 1949
		 },
		 {
		   "episode": 8,
		   "type": "book",
		   "title": "The Crying of Lot 49",
		   "author": "Thomas Pynchon",
		   "year": 1965,
		   "display_year": 1965
		 },
		 {
		   "episode": 9,
		   "type": "book",
		   "title": "The Black Cauldron",
		   "author": "Lloyd Alexander",
		   "year": 1965,
		   "display_year": 1965
		 },
		 {
		   "episode": 9,
		   "type": "book",
		   "title": "Odds Against",
		   "author": "Dick Francis",
		   "year": 1963,
		   "display_year": 1965
		 },
		 {
		   "episode": 9,
		   "type": "book",
		   "title": "\"Ozymandias\"",
		   "author": "Percy Bysshe Shelley",
		   "year": 1818,
		   "display_year": 1818
		 },
		 {
		   "episode": 11,
		   "type": "book",
		   "title": "Goodnight Moon",
		   "author": "Margaret Wise Brown",
		   "year": 1947,
		   "display_year": 1947
		 },
		 {
		   "episode": 11,
		   "type": "book",
		   "title": "Nature",
		   "author": "Ralph Waldo Emerson",
		   "year": 1836,
		   "display_year": 1836
		 },
		 {
		   "episode": 12,
		   "type": "book",
		   "title": "Nat Turner's Slave Rebellion",
		   "author": "Herbert Aptheker",
		   "year": 1965,
		   "display_year": 1966
		 },
		 {
		   "episode": 13,
		   "type": "book",
		   "title": "Third Girl",
		   "author": "Agatha Christie",
		   "year": 1967,
		   "display_year": 1966
		 },
		 {
		   "episode": 13,
		   "type": "book",
		   "title": "Twice 22",
		   "author": "Ray Bradbury",
		   "year": 1964,
		   "display_year": 1966
		 },
		 {
		   "episode": 13,
		   "type": "book",
		   "title": "Tai-Pan",
		   "author": "James Clavell",
		   "year": 1968,
		   "display_year": 1966
		 },
		 {
		   "episode": 13,
		   "type": "book",
		   "title": "The Smokejumpers",
		   "author": "Randle M. Hurst",
		   "year": 1966,
		   "display_year": 1966
		 },
		 {
		   "episode": 13,
		   "type": "book",
		   "title": "The Sunday Gentleman",
		   "author": "Irving Wallace",
		   "year": 1963,
		   "display_year": 1965
		 }
		]
      }
    }
}
</script>
