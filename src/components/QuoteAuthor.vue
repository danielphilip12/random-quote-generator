<template>
  <div>
    <h6 class="card-subtitle mb-2 text-muted">
      Quote By:
      <router-link :to="`/quotes/${author}`">{{ author }}</router-link>
    </h6>
  </div>
</template>

<script>
export default {
  props: ["author"],
};
</script>

<style></style>
