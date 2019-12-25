import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger(
      'inOutMobileAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('0.5s ease-out',
                    style({ height: 370, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 370, opacity: 1 }),
            animate('0.5s ease-in',
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    ),
    trigger(
      'inOutDesktopAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('0.5s ease-out',
                    style({ height: 64, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 64, opacity: 1 }),
            animate('0.5s ease-in',
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class NavbarComponent implements OnInit {

  menuVisible: boolean;

  constructor() { }

  ngOnInit() {
  }

}
