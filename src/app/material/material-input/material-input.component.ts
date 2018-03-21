import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eor-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario ={
    nombre:'EmmanuelO'
  };

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.usuario.nombre='Juan';
    },3000);
  }

  onKeyUp($event){
    console.log('Evento keyup',$event);
      
    }
  onBlur($event){
    console.log('Evento blur',$event);
  }
}
