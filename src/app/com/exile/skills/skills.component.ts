import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { skillGemList } from './skillGemList';

export interface SkillGemList {
  name: string;
  level: number;
  support: string;
  default: string;
  alt1: string;
  alt2?: string;
  alt3?: string;
}

const DATA: SkillGemList[] = skillGemList;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  displayedColumns: string[] = ['level', 'name', 'support', 'default', 'alt1', 'alt2', 'alt3'];
  dataSource = new MatTableDataSource(DATA);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
