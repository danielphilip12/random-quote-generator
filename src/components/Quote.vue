<template>
  <div class="card d-flex" style="width: 400px; height: 300px;">
    <div class="card-body">
      <h5 class="card-title">{{ genre }}</h5>
      <QuoteAuthor :author="author" />
      <QuoteText :quote="quote" />
    </div>
    <button
      class="btn btn-lg btn-info justify-content-center"
      @click="handleClick"
    >
      New Quote
    </button>
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
      genre: String,
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
        this.genre = res.data.data[0].quoteGenre.toUpperCase();
      });
    },
  },
  beforeMount() {
    this.getRandomQuote().then((res) => {
      this.quote = res.data.data[0].quoteText;
      this.author = res.data.data[0].quoteAuthor;
      this.genre = res.data.data[0].quoteGenre.toUpperCase();
    });
  },
};
</script>

<style></style>
