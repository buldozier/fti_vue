import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import ProgramsView from "@/views/ProgramsView";
import StudentUnionView from "@/views/StudentUnionView";
import ContactsView from "@/views/ContactsView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/programs",
    name: "programs",
    component: ProgramsView,
  },
  {
    path: "/student_union",
    name: "student_union",
    component: StudentUnionView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
