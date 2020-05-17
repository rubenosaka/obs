import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class TaskService {
  owner = 11
  apiUrl = "http://amimusa.xen.prgmr.com:3000/tasks/"
  constructor(protected http: HttpClient) { }
  getTasks() {
    return this.http.get(this.apiUrl+this.owner)
    .pipe(
       map((response:Response)=>response)
     );
  }




  data = {}

  addNewTask(description:string, completed: boolean): Observable<any> {

    console.log(description);
    console.log(completed);
    const url = this.apiUrl+this.owner;
    console.log(url);
    this.data ={
      "description": description,
      "completed": completed
    }
    return this.http.post(url, this.data)

  }

  removeTask(id:string, i): Observable<any> {

    console.log(id);
    const url = this.apiUrl+id;
    console.log(url);
    return this.http.delete(url)

  }


  updateTask(id: string, description:string, completed: boolean): Observable<any> {

    const url = this.apiUrl+id;
    console.log(url);
    this.data ={
      "description": description,
      "completed": completed
    }
    return this.http.patch(url, this.data)

  }
}
