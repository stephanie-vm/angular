import { Component, EventEmitter, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Input } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponentDbz {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power:10
  }]


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter


  onDeleteCharacter(id?:string):void {
    if(!id) return;
    console.log({id})
    this.onDelete.emit(id);
  }
}
