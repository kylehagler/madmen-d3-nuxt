<template>
  <div>
    <Header activeSeason="1" />
    <chart :seasonData="this.seasonData"></chart>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
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
         "title": "The Crisis of the Old Order",
         "author": "Arthur Schlesinger Jr.",
         "year": 1957,
         "display_year": 1957
       },
       {
         "episode": 1,
         "type": "book",
         "title": "The View from Chivo",
         "author": "H. Allen Smith",
         "year": 1971,
         "display_year": 1971
       },
       {
         "episode": 1,
         "type": "book",
         "title": "The Peking Man is Missing",
         "author": "Claire Taschdjian",
         "year": 1977,
         "display_year": 1977
       },
       {
         "episode": 1,
         "type": "book",
         "title": "La Presidentia",
         "author": "Lois Gould",
         "year": 1982,
         "display_year": 1982
       },
       {
         "episode": 1,
         "type": "book",
         "title": "Masterpieces of World Literature in Digest Form",
         "author": "Frank Magill",
         "year": 1952,
         "display_year": 1952
       },
       {
         "episode": 3,
         "type": "book",
         "title": "Lady Chatterly's Lover",
         "author": "D.H. Lawrence",
         "year": 1928,
         "display_year": 1928
       },
       {
         "episode": 4,
         "type": "book",
         "title": "Italy",
         "author": "Herbert Kubly",
         "year": 1961,
         "display_year": 1961
       },
       {
         "episode": 4,
         "type": "book",
         "title": "Nursery Friends from France",
         "author": "Olive Beaupre Miller",
         "year": 1925,
         "display_year": 1925
       },
       {
         "episode": 6,
         "type": "book",
         "title": "The Best of Everything",
         "author": "Rona Jaffe",
         "year": 1960,
         "display_year": 1958
       },
       {
         "episode": 6,
         "type": "book",
         "title": "Exodus",
         "author": "Leon Uris",
         "year": 1958,
         "display_year": 1958
       },
       {
         "episode": 8,
         "type": "book",
         "title": "Atlas Shrugged",
         "author": "Ayn Rand",
         "year": 1956,
         "display_year": 1957
       }
      ]
    }
  }
}
</script>
