<template>
  <div class="container">
    <QuoteBoxList :quote="quote" :getRandomQuote="getRandomQuote" />
  </div>
</template>

<script>
import QuoteBoxList from "./components/QuoteBoxList";

import axios from "axios";
export default {
  name: "App",
  components: {
    QuoteBoxList,
  },
  data() {
    return {
      quote: null,
      author: "",
    };
  },
  methods: {
    async getRandomQuote() {
      return await axios.get(
        "https://quote-garden.herokuapp.com/api/v3/quotes/random"
      );
    },
    async getAuthorQuotes(author) {
      return await axios.get(
        "https://quote-garden.herokuapp.com/api/v3/quotes/",
        {
          params: {
            author: author,
          },
        }
      );
    },
  },
  beforeMount() {
    this.getRandomQuote().then((res) => {
      this.quote = res;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
