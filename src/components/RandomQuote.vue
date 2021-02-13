<template>
  <div>
    <QuoteBox
      :quote="quote"
      :getRandomQuote="getRandomQuote"
      :hideButton="false"
      v-if="quote !== null"
    />
  </div>
</template>

<script>
import QuoteBox from "../components/QuoteBox";
import axios from "axios";
export default {
  components: {
    QuoteBox,
  },
  data() {
    return {
      quote: null,
    };
  },
  methods: {
    async getRandomQuote() {
      return await axios.get(
        "https://quote-garden.herokuapp.com/api/v3/quotes/random"
      );
    },
  },
  created() {
    console.log("Created Random");
    this.getRandomQuote().then((res) => {
      let { quoteText, quoteAuthor, quoteGenre } = res.data.data[0];
      this.quote = {
        quoteText: quoteText,
        quoteAuthor: quoteAuthor,
        quoteGenre: quoteGenre.toUpperCase(),
      };
    });
  },
};
</script>

<style></style>
