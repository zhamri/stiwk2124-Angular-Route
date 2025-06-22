import { Routes } from '@angular/router';
import {Courses} from './courses/courses';
import {About} from './about/about';
import {Login} from './login/login';
import {Home} from './home/home';
import {NotFound} from './not-found/not-found';
import {Stiwk2124} from './courses/stiwk2124/stiwk2124';
import {Stiwk3014} from './courses/stiwk3014/stiwk3014';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'courses',
    component: Courses,
    children: [
      {
        path: 'stiwk2124',
        component: Stiwk2124,
      },
      {
        path: 'stiwk3014',
        component: Stiwk3014,
      },
    ]
  },
  {
    path: 'old-courses',
    redirectTo: (route) => {
      return 'courses'
    },
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '**',
    component: NotFound,
  },
];
