import { Component, Input } from '@angular/core';
import { Profile } from '../_classes/Profile';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent {
  @Input() profile:Profile;

  constructor() {
    this.profile=new Profile("","","","","","","","","","","");
  }
}
