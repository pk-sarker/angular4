import { Injectable } from '@angular/core';


function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable()
export class WindowRefService {

  constructor() { }
  get nativeWindow(): any {
    return _window();
  }
  
  get width():number {
    return _window().innerWidth;
  }
  get height():number {
    return _window().innerHeight;
  }
}
