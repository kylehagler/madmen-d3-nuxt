<template>
  <div>
    <Header activeSeason="7" />
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
           "title": "A Small Town in Germany",
           "author": "John le Carré",
           "year": 1968,
           "display_year": 1968
         },
         {
           "episode": 1,
           "type": "book",
           "title": "The Adventures of Tom Sawyer",
           "author": "Mark Twain",
           "year": 1876,
           "display_year": 1876
         },
         {
           "episode": 3,
           "type": "book",
           "title": "The American Way of Death",
           "author": "Jessica Mitford",
           "year": 1963,
           "display_year": 1963
         },
         {
           "episode": 3,
           "type": "book",
           "title": "Frankenstein",
           "author": "Mary Shelley",
           "year": 1818,
           "display_year": 1818
         },
         {
           "episode": 3,
           "type": "book",
           "title": "Dracula",
           "author": "Bram Stoker",
           "year": 1897,
           "display_year": 1897
         },
         {
           "episode": 3,
           "type": "book",
           "title": "Junior Cook Book: For the Hostess and Host of Tomorrow",
           "author": "Better Homes and Gardens",
           "year": 1955,
           "display_year": 1955
         },
         {
           "episode": 4,
           "type": "book",
           "title": "Portnoy's Complaint",
           "author": "Philip Roth",
           "year": 1969,
           "display_year": 1969
         },
         {
           "episode": 4,
           "type": "book",
           "title": "From the Earth to the Moon",
           "author": "Jules Verne",
           "year": 1865,
           "display_year": 1865
         },
         {
           "episode": 4,
           "type": "book",
           "title": "Listen to the Warm",
           "author": "Rod McKuen",
           "year": 1966,
           "display_year": 1966
         },
         {
           "episode": 4,
           "type": "book",
           "title": "The Detective",
           "author": "Roderick Thorpe",
           "year": 1964,
           "display_year": 1966
         },
         {
           "episode": 4,
           "type": "book",
           "title": "Shadow of a Bull",
           "author": "Maja Wojciechowska",
           "year": 1962,
           "display_year": 1964
         },
         {
           "episode": 6,
           "type": "book",
           "title": "Katie Mulholland",
           "author": "Catherine Cookson",
           "year": 1967,
           "display_year": 1967
         },
         {
           "episode": 6,
           "type": "book",
           "title": "The Ceremony of Innocence",
           "author": "Ronald Ribman",
           "year": 1968,
           "display_year": 1968
         },
         {
           "episode": 8,
           "type": "book",
           "title": "Mildred Pierce",
           "author": "James M. Cain",
           "year": 1941,
           "display_year": 1941
         },
         {
           "episode": 8,
           "type": "book",
           "title": "U.S.A. Trilogy",
           "author": "John Dos Pasos",
           "year": 1938,
           "display_year": 1938
         },
         {
           "episode": 12,
           "type": "book",
           "title": "On the Road",
           "author": "Jack Kerouac",
           "year": 1957,
           "display_year": 1957
         },
         {
           "episode": 12,
           "type": "book",
           "title": "Dora, An Analysis of A Case of Hysteria",
           "author": "Sigmund Frued",
           "year": 1905,
           "display_year": 1905
         },
         {
           "episode": 13,
           "type": "book",
           "title": "The Godfather",
           "author": "Mario Puzio",
           "year": 1969,
           "display_year": 1969
         },
         {
           "episode": 13,
           "type": "book",
           "title": "The Woman of Rome",
           "author": "Alberto Moravia",
           "year": 1947,
           "display_year": 1947
         },
         {
           "episode": 13,
           "type": "book",
           "title": "Hawaii",
           "author": "James Michener",
           "year": 1959,
           "display_year": 1959
         },
         {
           "episode": 13,
           "type": "book",
           "title": "The Andromeda Strain",
           "author": "Michael Crichton",
           "year": 1969,
           "display_year": 1969
         },
         {
           "episode": 14,
           "type": "book",
           "title": "The Goodbye Look",
           "author": "Ross MacDonald",
           "year": 1969,
           "display_year": 1969
         },
         {
           "episode": 14,
           "type": "book",
           "title": "Commentaries on Living: 2nd Series",
           "author": "Jiddu Krishnamurti",
           "year": 1958,
           "display_year": 1958
         },
         {
           "episode": 14,
           "type": "book",
           "title": "Gestalt Therapy: Excitement and Growth in the Human Personality ",
           "author": "Frederick S. Perls",
           "year": 1951,
           "display_year": 1951
         }
        ]
      }
    }
}
</script>
