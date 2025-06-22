import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [
    RouterOutlet
  ],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {

  constructor(private router: Router) {}

  goToCourse(courseCode: string) {
    this.router.navigate(['courses', courseCode]);
  }
}
