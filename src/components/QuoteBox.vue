<template>
  <div class="row rows-cols-3">
    <div class="col"></div>
    <div class="col">
      <Quote
        :quote="quote"
        :getRandomQuote="getRandomQuote"
        :hideButton="hideButton"
      />
    </div>
    <div class="col"></div>
  </div>
</template>

<script>
import Quote from "./Quote";
export default {
  components: {
    Quote,
  },
  props: ["quote", "getRandomQuote", "hideButton"],
};
</script>

<style></style>
