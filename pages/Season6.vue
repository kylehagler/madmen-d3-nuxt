<template>
  <div>
    <Header activeSeason="6" />
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
            "title": "The Inferno",
            "author": "Dante Alighieri",
            "year": 1320,
            "display_year": 1320
          },
          {
            "episode": 1,
            "type": "book",
            "title": "Julius Caesar",
            "author": "William Shakespeare",
            "year": 1623,
            "display_year": 1623
          },
          {
            "episode": 6,
            "type": "book",
            "title": "Sterling's Gold",
            "author": "Roger Sterling",
            "year": 2010,
            "display_year": 2010
          },
          {
            "episode": 6,
            "type": "book",
            "title": "Topaz",
            "author": "Leon Uris",
            "year": 1967,
            "display_year": 1967
          },
          {
            "episode": 7,
            "type": "book",
            "title": "The Last Picture Show",
            "author": "Larry McMurtry",
            "year": 1966,
            "display_year": 1966
          },
          {
            "episode": 8,
            "type": "book",
            "title": "Rosemary's Baby",
            "author": "Ira Levin",
            "year": 1967,
            "display_year": 1967
          },
          {
            "episode": 8,
            "type": "book",
            "title": "I Ching: The Book of Change",
            "author": "John Blofeld",
            "year": 1964,
            "display_year": 1965
          },
          {
            "episode": 8,
            "type": "book",
            "title": "Valley of the Dolls",
            "author": "Jacqueline Susann",
            "year": 1965,
            "display_year": 1966
          },
          {
            "episode": 10,
            "type": "book",
            "title": "Bhagavad Gita",
            "author": "-",
            "year": 1785,
            "display_year": 1785
          },
          {
            "episode": 10,
            "type": "book",
            "title": "How I Raised Myself From Failure to Success in Selling",
            "author": "Frank Bettger",
            "year": 1949,
            "display_year": 1949
          },
          {
            "episode": 11,
            "type": "book",
            "title": "Nicholas and Alexandra",
            "author": "Robert K. Massie",
            "year": 1967,
            "display_year": 1967
          },
          {
            "episode": 12,
            "type": "book",
            "title": "Evolution",
            "author": "Ruth E. Moore",
            "year": 1962,
            "display_year": 1962
          }
         ]
      }
    }
}
</script>
