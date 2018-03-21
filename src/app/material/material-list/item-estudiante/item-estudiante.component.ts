import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudiante } from '../../../shared/model/estudiante';
@Component({
  selector: 'eor-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {
  
  readonly DEFAULT_PICTURE = 'https://i2.wp.com/karolinskatrialalliance.se/wp-content/uploads/2017/02/staff-member-2.jpg?fit=220%2C260&ssl=1'


  @Input()
  estudiante:Estudiante;

  @Output()
  onMouseClick = new EventEmitter<Estudiante>();

  constructor() { }

  ngOnInit() {
  }

  onClick(e:Estudiante){
    this.onMouseClick.emit(e);

  }

}
