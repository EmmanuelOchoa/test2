import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';
@Component({
  selector: 'eor-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apod:Apod;
  error:string;
  //private nasaApi:NasaApiService;
  constructor(private nasaApi:NasaApiService) { 
    //this.nasaApi=_nasaApi;
  }

  ngOnInit() {
    this.nasaApi.getApod().subscribe((data:Apod)=>{
      setTimeout(()=> {
      this.apod = data;
        
      }, 2000);
    
    },error=>{
      setTimeout(() =>{
      console.log('Error al conectar con el servidor...');
      this.error= 'Error al conectar con el servidor...';
        
      }, 2000);
    });
  }
  

}
