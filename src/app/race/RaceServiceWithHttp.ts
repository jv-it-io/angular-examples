import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RaceServiceWithHttp{
  constructor(private http: HttpClient) {
  }

  list(id: number){
    return this.http.get(`http://localhost:8080/api/v1/students/${id}`, { observe: 'response' });
  }
}
