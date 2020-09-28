import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  actions = [
    {
      icon: 'file-text',
      label: 'test1',
      query: { a: 1 }
    },
    {
      icon: 'calendar',
      label: 'test2',
      query: { a: 2 }
    },
    {
      icon: 'calendar',
      label: 'test3',
      query: { a: 3 }
    },
    {
      icon: 'elipsis-h',
      label: 'test4',
      query: { a: 4 }
    },
    {
      icon: 'file-text',
      label: 'test5',
      query: { a: 5 }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
