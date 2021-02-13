<template>
  <div>
    <router-link to="/">Random Quote</router-link>
    <h1>{{ $route.params.author }}</h1>
    <QuoteBoxList :quotes="quotes" :hideButton="true" />
    <div class="spinner-grow text-primary" role="status" v-if="quotes === []">
      <span class="sr-only"></span>
    </div>
  </div>
</template>

<script>
import QuoteBoxList from "./QuoteBoxList";
import axios from "axios";
export default {
  components: {
    QuoteBoxList,
  },
  data() {
    return {
      quotes: [],
    };
  },
  methods: {
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
  created() {
    this.getAuthorQuotes(this.$route.params.author).then((res) => {
      for (let i = 0; i < res.data.data.length; i++) {
        let { quoteText, quoteAuthor, quoteGenre } = res.data.data[i];
        let newQuote = {
          quoteText: quoteText,
          quoteAuthor: quoteAuthor,
          quoteGenre: quoteGenre.toUpperCase(),
        };
        this.quotes.push(newQuote);
      }
    });
  },
};
</script>

<style></style>
