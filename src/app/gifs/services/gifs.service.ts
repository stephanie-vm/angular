import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class GifsService {

  private _tagsHistory: String[] = [];
  private apiKey: string = 'Z1j6WkNnWdIF1gCX31V7BB76APdUE1Ld';

  constructor( private http: HttpClient) {}


  get tagsHistory() {

    return [...this._tagsHistory];

  }

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();


    if(this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0,10);

  }


  async searchTag( tag: string):void {

    if(tag.length === 0) return;

    this.organizeHistory(tag);

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=Z1j6WkNnWdIF1gCX31V7BB76APdUE1Ld&q=valorant&limit=10');


    // fetch('https://api.giphy.com/v1/gifs/search?api_key=Z1j6WkNnWdIF1gCX31V7BB76APdUE1Ld&q=valorant&limit=10').then(resp => resp.json()).then( data => console.log(data));
  }
}
