import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TaskService {
  owner = 11
  constructor(protected http: HttpClient) { }
  getTasks() {
    return this.http.get('http://amimusa.xen.prgmr.com:3000/tasks/'+this.owner);
  }

  removeTask(id:string, i): Observable<any> {

    console.log(id);
    const url = 'http://amimusa.xen.prgmr.com:3000/tasks/'+id;
    console.log(url);
    return this.http.delete(url)

  }

  data = {}

  addNewTask(description:string, completed: boolean): Observable<any> {

    console.log(description);
    console.log(completed);
    const url = 'http://amimusa.xen.prgmr.com:3000/tasks/'+this.owner;
    console.log(url);
    this.data ={
      "description": description,
      "completed": completed
    }
    return this.http.post(url, this.data)

  }
}
