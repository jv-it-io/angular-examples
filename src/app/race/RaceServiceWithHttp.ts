import {HttpClient, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {IRace} from "../model/Race";
import {Observable} from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RaceServiceWithHttp{
  constructor(private http: HttpClient) {
  }

  list(id: string){
    return this.http.get(`http://localhost:8080/api/v1/races/${id}`, { observe: 'response' });
  }

  findAll(): Observable<HttpResponse<IRace[]>> {
    return this.http.get<IRace[]>('http://localhost:8080/api/v1/races/',{observe: 'response'});
  }
}
