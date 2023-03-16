import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {Factory} from "./factory";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  private factoriesUrl = 'http://localhost:3000/factories';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getFactories(): Observable<Factory[]> {
    return this.http.get<Factory[]>(this.factoriesUrl)
  }
  constructor(private http: HttpClient) { }
}
