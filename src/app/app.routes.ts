import { Routes } from '@angular/router';
import {Course} from './course/course';
import {About} from './about/about';
import {Login} from './login/login';
import {Home} from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'course',
    component: Course,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'login',
    component: Login,
  },
];
