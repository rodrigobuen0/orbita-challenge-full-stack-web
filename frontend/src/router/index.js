import { createMemoryHistory, createRouter } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import LoginLayout from '../layouts/LoginLayout.vue';
import StudentList from '../views/StudentList.vue';
import StudentCreate from '../views/StudentCreate.vue';
import StudentEdit from '../views/StudentEdit.vue';
import Login from '../views/LoginPage.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'StudentList',
        component: StudentList,
        meta: { requiresAuth: true },
      },
      {
        path: 'students/create',
        name: 'StudentCreate',
        component: StudentCreate,
        meta: { requiresAuth: true },
      },
      {
        path: 'students/edit/:id',
        name: 'StudentEdit',
        component: StudentEdit,
        props: true,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/login',
    component: LoginLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: Login,
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const user = JSON.parse(localStorage.getItem('authToken'));

  if (requiresAuth && !user) {
    next('/login');
  } else {
    next();
  }
});

export default router;
