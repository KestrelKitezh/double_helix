import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, Subscription } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { skillGemList } from './skills/skillGemList';
import { supportGemList } from './skills/supportGemList';
import { debounceTime } from 'rxjs/operators';

export interface SkillGemList {
  name: string;
  level: number;
  support: string;
  default: string;
  alt1: string;
  alt2?: string;
  alt3?: string;
}
const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
const DATA: SkillGemList[] = [...skillGemList, ...supportGemList].sort((a, b) => collator.compare(a.name, b.name));

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  displayedColumns: string[] = ['level', 'name', 'support', 'default', 'alt1', 'alt2', 'alt3'];
  dataSource = new MatTableDataSource(DATA);

  inputSubject = new Subject<string>();
  sub: Subscription;

  
  constructor() { }

  ngOnInit(): void {

    this.sub = this.inputSubject
      .pipe(debounceTime(300))
      .subscribe(inp => {
      
      this.dataSource.filter = inp.trim().toLowerCase();
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.inputSubject.next(filterValue);

    

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
