<template>
  <div>
    <QuoteText :quote="quote" />
    <QuoteAuthor :author="author" />
    <button @click="handleClick">New Quote</button>
  </div>
</template>

<script>
import QuoteText from "./QuoteText";
import QuoteAuthor from "./QuoteAuthor";
import axios from "axios";
export default {
  components: {
    QuoteText,
    QuoteAuthor,
  },
  data() {
    return {
      quote: String,
      author: String,
    };
  },
  methods: {
    getRandomQuote() {
      return axios.get(
        "https://quote-garden.herokuapp.com/api/v3/quotes/random"
      );
    },
    handleClick() {
      this.getRandomQuote().then((res) => {
        this.quote = res.data.data[0].quoteText;
        this.author = res.data.data[0].quoteAuthor;
      });
    },
  },
  beforeMount() {
    const x = this.getRandomQuote().then((res) => {
      this.quote = res.data.data[0].quoteText;
      this.author = res.data.data[0].quoteAuthor;
    });
    console.log(`X: ${x}`);
  },
};
</script>

<style></style>
