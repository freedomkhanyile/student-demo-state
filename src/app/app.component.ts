import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('flyInOut', [
      transition('*=>inmore', [
        style({ transform: 'translateX(100%)' }), //start in
        animate(200),
      ]),
      transition('*=>inless', [
        style({ transform: 'translateX(-100%)' }), //start in
        animate(200),
      ]),
      transition('*=>outless', [
        animate(200, style({ transform: 'translateX(100%)' })), //end in
      ]),
      transition('*=>outmore', [
        animate(200, style({ transform: 'translateX(-100%)' })), //end in
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'student-demo-state';
  index = 0;
  indexOld = 0;
  animationDone = false;
  constructor(private router: Router) {}

  getAnimation(i: number, indexOld: number, index: number) {
    const from = i == index ? 'in' : i == indexOld ? 'out' : null;
    if (from && indexOld != index)
      return from + (indexOld > index ? 'less' : 'more');
    return null;
  }
  navigate(index: number) {
    const path = ['/students', '/courses'][index];
    this.router.navigate([path]);
  }
}
