import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  isAuth: boolean = true;
}
