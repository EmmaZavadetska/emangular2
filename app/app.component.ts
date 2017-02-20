import {Component} from 'angular2/core';
import {CourseComponent} from './course.components';
import {SkillsComponents} from "./skills.component";

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
<course></course>
<skills></skills>`,
    directives: [CourseComponent, SkillsComponents]
})
export class AppComponent { }