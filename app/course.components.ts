import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from "./auto-grow.directive";

@Component({
    selector: 'course',
    template: `<h1>{{ title }}</h1>
<input type="text" autoGrow />
               <ul>
               <li *ngFor="#name of names">
               {{ name }}
               </li>
               </ul>
               `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CourseComponent {
    title: string = "SASHA KOZA";
    names;

    constructor(courseService: CourseService) {
    this.names = courseService.getCourses()
    }
}