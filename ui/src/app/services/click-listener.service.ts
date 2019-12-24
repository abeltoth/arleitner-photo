import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickListenerService {

  clickDetected = new EventEmitter<HTMLElement[]>();

  constructor() { }

  init() {
    document.querySelector('body')
      .addEventListener('click', (event: MouseEvent) => {
        const path = event['path'] ? event['path'] : this.getPathFromClickEvent(event);
        if (path) {
          this.clickDetected.emit(path);
        }
      });
  }

  private getPathFromClickEvent(event: MouseEvent): any[] {
    const target = event.target as HTMLElement;
    const path = [target];
    let parentElement = target.parentElement ? target.parentElement : null;

    while (parentElement) {
      path.push(parentElement);
      parentElement = parentElement.parentElement ? parentElement.parentElement : null;
    }

    return path;
  }
}
