<template>
  <div class="card d-flex" style="width: 400px; height: 300px;">
    <div class="card-body">
      <h5 class="card-title">{{ genre }}</h5>
      <QuoteAuthor :author="author" />
      <QuoteText :quote="quoteText" />
    </div>
    <button
      class="btn btn-lg btn-info justify-content-center"
      v-bind:class="{ 'd-none': hideButton }"
      @click="handleClick"
    >
      New Quote
    </button>
  </div>
</template>

<script>
import QuoteText from "./QuoteText";
import QuoteAuthor from "./QuoteAuthor";
export default {
  components: {
    QuoteText,
    QuoteAuthor,
  },
  data() {
    return {
      quoteText: "",
      author: "",
      genre: "",
    };
  },
  props: ["quote", "getRandomQuote", "hideButton"],
  methods: {
    handleClick() {
      this.getRandomQuote().then((res) => {
        this.quoteText = res.data.data[0].quoteText;
        this.author = res.data.data[0].quoteAuthor;
        this.genre = res.data.data[0].quoteGenre.toUpperCase();
      });
    },
  },
  beforeMount() {
    this.quoteText = this.quote.quoteText;
    this.author = this.quote.quoteAuthor;
    this.genre = this.quote.quoteGenre;
  },
};
</script>

<style></style>
