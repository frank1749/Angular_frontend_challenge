import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserDataInterface, ProjectDataInterface, ApplicationDataInterface } from '../interfaces/project-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  initSession(userData: UserDataInterface) {
    return this.http.post(`${this.apiUrl}/auth/login`, userData);
  }

  createProject(projectData: ProjectDataInterface) {
    return this.http.post(`${this.apiUrl}/services/projects`, projectData);
  }

  getProjects() {
    return this.http.get(`${this.apiUrl}/services/projects`);
  }

  createApplication(applicationData: ApplicationDataInterface) {
    return this.http.post(`${this.apiUrl}/services/applications`, applicationData);
  }
  
}
