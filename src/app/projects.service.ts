import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { identity, ObservedValueOf, Observable } from 'rxjs';
import { project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private url = "assets/data/projects.json"
  constructor(private http : HttpClient)   { }

  public getProjects(): Observable<project[]>{ 
     return this.http.get<project[]>(this.url);}
}
