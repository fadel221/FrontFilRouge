import { Component, OnInit } from '@angular/core';
import { MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
opened = false;
  
  // overlap = false;

  //watcher: Subscription;

  constructor()//media:ObservableMedia) {
    {}
   /* this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    }*/
  
    SidenavActions()
    {
      this.opened=!this.opened
    }

  ngOnInit(): void {
  }

}
