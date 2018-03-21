import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';
import { ClassEstudiante } from '../../shared/model/class-estudiante';

@Component({
  selector: 'eor-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {
  estudiante1:ClassEstudiante;
  estudiante2:Estudiante;
  estudiante3:Estudiante;

  listaEstudiantes:Estudiante[];

  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente MaterialList');
    this.estudiante1 = new ClassEstudiante(1,'Emmanuel Ochoa','Delicias');
    console.log('edad.estudiante1:', this.estudiante1.getEdad());

    this.estudiante2 = {
      id:2,
      nombre:'Jorge Perez',
      ciudad:'Meoqui',
      fotoURL:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/69263/profile/profile-512.jpg?2'
    };
    this.estudiante3 = {
      id:3,
      nombre:'Maria Rodriguez',
      ciudad:'Camargo',
      fotoURL:'https://i.pinimg.com/736x/12/66/7c/12667c2bbffd6472553f65b10d14d9fb--thalia-profile-pics.jpg'
    };
    this.listaEstudiantes = [this.estudiante2,this.estudiante3];
    
    setTimeout(()=>{
      this.estudiante3={
        id:4,
        nombre:'Juana Lopez',
        ciudad:'Rosales',
        fotoURL:'https://linustechtips.com/main/uploads/monthly_2016_02/93a.png.1672a22bc3e0ca2fd6fc1427e1a218c7.thumb.png.7aef31b3ec76ed7b2876f7e678817588.png'
      }
    },3000);
  }

  onMouseClick($event:Estudiante){
    console.log('Click on:',$event.nombre);
  }
  

}
