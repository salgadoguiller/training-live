import { Component, OnInit } from '@angular/core';

import { Colors } from 'src/app/utilities/enums';

@Component({
  selector: 'tr-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public color: Colors;

  constructor() { }

  ngOnInit(): void {
    this.color = Colors.PURPLE
  }

}
