<template>
  <div>
    <Header activeSeason="2" />
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
           "title": "Meditations in an Emergency",
           "author": "Frank O'Hara",
           "year": 1957,
           "display_year": 1957
         },
         {
           "episode": 2,
           "type": "book",
           "title": "The Agony and the Ecstasy",
           "author": "Irving Stone",
           "year": 1961,
           "display_year": 1961
         },
         {
           "episode": 3,
           "type": "book",
           "title": "Marjorie Morningstar",
           "author": "Herman Wouk",
           "year": 1955,
           "display_year": 1955
         },
         {
           "episode": 4,
           "type": "book",
           "title": "\"A Diamond as Big as the Ritz\" from Babylon Revisited and Other Stories",
           "author": "F. Scott Fitzgerald",
           "year": 1931,
           "display_year": 1931
         },
         {
           "episode": 8,
           "type": "book",
           "title": "Admiral Hornblower in the West Indies",
           "author": "C.S. Forester",
           "year": 1958,
           "display_year": 1958
         },
         {
           "episode": 9,
           "type": "book",
           "title": "Ship of Fools",
           "author": "Katherine Anne Porter",
           "year": 1962,
           "display_year": 1962
         },
         {
           "episode": 10,
           "type": "book",
           "title": "Junior Classics Volume One (Fairy Tales and Fables) and Volume Seven (The Animal Book)",
           "author": "",
           "year": 1938,
           "display_year": 1938
         },
         {
           "episode": 11,
           "type": "book",
           "title": "The Sound and the Fury",
           "author": "William Faulkner",
           "year": 1929,
           "display_year": 1929
         }
        ]
      }
    }
}
</script>
