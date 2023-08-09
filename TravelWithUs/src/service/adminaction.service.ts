import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { user } from 'src/app/models/User.models';
import { Tour } from 'src/app/models/Tour.models';
import { Image } from 'ol';
import { Gallery } from 'src/app/models/gallery.models';

@Injectable({
  providedIn: 'root'
})
export class AdminactionService {

  baseUrl ="https://localhost:7080/api/Agent";
  constructor(private http:HttpClient) { }

  getAlladmins():Observable<user[]>{
    return this.http.get<user[]>(this.baseUrl);
  }

  getAgents():Observable<user[]>{
    return this.http.get<user[]>('https://localhost:7080/api/TravellingAgent');
  }

  addadmins(crd: user):Observable<user>{
    return this.http.post<user>(this.baseUrl,crd);
  }

  addTour(crd: Tour):Observable<Tour>{
    return this.http.post<Tour>('https://localhost:7080/api/AgentAddingTour',crd);
  }
  
  
  deletemethod(id:Number):Observable<user>{
    return this.http.delete<user>(this.baseUrl +'/' + id);

  }

  
  Updateadmins(crd :user):Observable<user>{
    return this.http.put<user>(this.baseUrl +'/'+crd.userId,crd);
  }

  getTours():Observable<Tour[]>{
    return this.http.get<Tour[]>('https://localhost:7080/api/AgentAddingTour');
  }

  getImages():Observable<Gallery[]>{
    return this.http.get<Gallery[]>('https://localhost:7080/api/Administration_Image');
  }

  booktour(formData: any):Observable<any>{
    return this.http.post('https://localhost:7080/api/Books',formData);
 
  }
}
