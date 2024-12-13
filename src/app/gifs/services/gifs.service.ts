import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class GifsService {

  private _tagsHistory: String[] = [];

  constructor() { }

  get tagsHistory() {

    return [...this._tagsHistory];

  }


  
  searchTag( tag: string):void {
    this._tagsHistory.unshift(tag);
  }
}
