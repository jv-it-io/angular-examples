import {ApiService} from "../api/ApiService.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RaceService{
  constructor(private apiService: ApiService) {
  }

  list(id: number){
    return this.apiService.get("/races");
  }
}
