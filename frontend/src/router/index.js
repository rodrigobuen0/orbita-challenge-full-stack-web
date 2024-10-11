
import { createMemoryHistory, createRouter } from 'vue-router'

import StudentList from '../views/StudentList.vue'
import StudentCreate from '../views/StudentCreate.vue'
import StudentEdit from '../views/StudentEdit.vue'

const routes = [
    {
        path: '/',
        name: 'StudentList',
        component: StudentList
      },
      {
        path: '/students/create',
        name: 'StudentCreate',
        component: StudentCreate,
      },
      {
        path: '/students/edit/:id',
        name: 'StudentEdit',
        component: StudentEdit,
        props: true,
      },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
