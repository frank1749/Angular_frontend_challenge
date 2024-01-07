import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProjectDataInterface } from '../interfaces/project-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createProject(projectData: ProjectDataInterface) {
    return this.http.post(`${this.apiUrl}/services/projects`, projectData);
  }

  getProjects() {
    return this.http.get(`${this.apiUrl}/services/projects`);
  }
  
}
