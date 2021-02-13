import { createWebHistory, createRouter } from "vue-router";
import QuotesAuthor from "../components/QuotesAuthor";
import RandomQuote from "../components/RandomQuote";

const routes = [
  {
    path: "/",
    name: "RandomQuote",
    component: RandomQuote,
  },
  {
    path: "/quotes/:author",
    name: "QuotesAuthor",
    component: QuotesAuthor,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
