<template>
  <QuoteBox :quote="quote" :getRandomQuote="getRandomQuote" />
</template>

<script>
import QuoteBox from "./QuoteBox";
export default {
  components: {
    QuoteBox,
  },
  props: ["quote", "getRandomQuote"],
};
</script>

<style></style>
