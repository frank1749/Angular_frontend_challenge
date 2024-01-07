import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:4000/api/services';

  constructor(private http: HttpClient) { }

  createProject(projectData: any) {
    return this.http.post(`${this.apiUrl}/projects`, projectData);
  }
}
