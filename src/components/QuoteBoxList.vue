<template>
  <div v-for="quote in quotes" :key="quote">
    <QuoteBox :quote="quote" :hideButton="hideButton" />
  </div>
</template>

<script>
import QuoteBox from "./QuoteBox";
export default {
  components: {
    QuoteBox,
  },
  props: ["quotes", "hideButton"],
};
</script>

<style></style>
