import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
 
  private _value:'X'|'O'|null

  constructor() { this._value=null; }

  ngOnInit(): void {
   
  }

  @Input() set value(value:'X'|'O'|null){
    this._value=value;
  }

  get value():('X'|'O'|null){
   return this._value;
  }


}
