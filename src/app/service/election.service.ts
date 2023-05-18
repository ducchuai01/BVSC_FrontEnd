import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Election } from '../models/election';

const ApiUrl = "http://localhost:8080/bvsc-mapp/api/v1/election";

@Injectable({
  providedIn: 'root'
})
export class ElectionService {
  constructor(private http:HttpClient) { }
  getAll():Observable<Election>{
    return this.http.get<Election>(`${ApiUrl}/all`);
  }

  getById(id:string):Observable<Election>{
    return this.http.get<Election>(`${ApiUrl}/${id}`).pipe(tap(s=> console.log(id)))
  }
  getByIdMeeting(idMeeting:number):Observable<Election>{
    return this.http.get<Election>(`${ApiUrl}/allByMeeting/${idMeeting}`)
  }
  delete(id:any):Observable<Election>{
    return this.http.delete<Election>(`${ApiUrl}/${id}`).pipe(
      tap(() => console.log(id))
    )
  }
  create(data:any):Observable<Election>{
    return this.http.post<Election>(`${ApiUrl}`,data).pipe(
      tap(_s=>console.log("post"))
    )
  }
  update(id:string,data:any):Observable<Election>{
    return this.http.put<Election>(`${ApiUrl}/${id}`,data).pipe(
      tap(_s=>console.log(id))
    )
  }
}
