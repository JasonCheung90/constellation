import { createRouter, createWebHistory } from "vue-router";
import TodayPage from "../views/Today.vue";

const routes = [
  {
    path: "/",
    name: "Today",
    component: TodayPage,
  },
  {
    path: "/tomorrow",
    name: "Tomorrow",
    component: () => import("../views/Tomorrow.vue"),
  },
  {
    path: "/week",
    name: "Week",
    component: () => import("../views/Week.vue"),
  },
  {
    path: "/month",
    name: "Month",
    component: () => import("../views/Month.vue"),
  },
  {
    path: "/year",
    name: "Year",
    component: () => import("../views/Year.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
