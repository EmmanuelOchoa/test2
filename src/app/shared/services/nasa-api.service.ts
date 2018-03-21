import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const APOD_URL ="https://api.nasa.gov/planetary/apod";
const MARS_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000";
const API_KEY = "UFmEhDK4EVrIrEWm0hsvPcEJNML5h6n2m56YkyF2";

@Injectable()
export class NasaApiService {
  
    

    //Dependency Injection:HttpClient
  constructor(private httpClient:HttpClient) { }

  getApod():Observable<Apod>{
    //return this.DATA;
    //Template literals
    return this.httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`);
  }
  getMarsImages(camera:string):Observable<any>{
    return this.httpClient.get(`${MARS_URL}&camera=${camera}&api_key=${API_KEY}`);
  }
}
