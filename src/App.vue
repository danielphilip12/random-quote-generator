<template>
  <div class="container">
    <QuoteBox
      :quote="quote"
      :getRandomQuote="getRandomQuote"
      :hideButton="false"
      v-if="quote !== null"
    />
    <hr />
    <QuoteBoxList :quotes="quotes" v-if="quotes !== []" :hideButton="true" />
  </div>
</template>

<script>
import QuoteBoxList from "./components/QuoteBoxList";
import QuoteBox from "./components/QuoteBox";
import axios from "axios";
export default {
  name: "App",
  components: {
    QuoteBoxList,
    QuoteBox,
  },
  data() {
    return {
      quote: null,
      author: "",
      quotes: [],
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
  created() {
    this.getRandomQuote().then((res) => {
      let { quoteText, quoteAuthor, quoteGenre } = res.data.data[0];
      this.quote = {
        quoteText: quoteText,
        quoteAuthor: quoteAuthor,
        quoteGenre: quoteGenre.toUpperCase(),
      };
    });
    this.getAuthorQuotes("Bill Gates").then((res) => {
      for (let i = 0; i < res.data.data.length; i++) {
        let { quoteText, quoteAuthor, quoteGenre } = res.data.data[i];
        let newQuote = {
          quoteText: quoteText,
          quoteAuthor: quoteAuthor,
          quoteGenre: quoteGenre.toUpperCase(),
        };
        this.quotes.push(newQuote);
      }
      console.log("This.quotes");
      console.log(this.quotes);
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
