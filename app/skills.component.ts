import {Component} from 'angular2/core';
import {SkillService} from './skills.service';

@Component({
    selector: 'skills',
    template: `<h1>{{ title }}</h1>
<ul><li *ngFor="#skill of skills">{{ skill }}</li></ul>
`,
    providers: [SkillService]
})

export class SkillsComponents {
    title : string = "EY";
    skills: string[];

    constructor (skillService: SkillService) {
        this.skills = skillService.getSkills()
    }
}