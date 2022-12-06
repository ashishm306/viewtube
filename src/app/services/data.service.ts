import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Subject, subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public username = new BehaviorSubject<string>('Guest');
  public searchVariable = new Subject<string>();
  public idvariable = new Subject<any>();
  constructor(private http: HttpClient) {

  }
  registerUser(user: any) {
    return this.http.post('http://localhost:9000/auth/register', user)
  }
  login(cred: any) {
    return this.http.post('http://localhost:9000/auth/login', cred);
  }
  getvideos() {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=in&maxResults=10&key=${environment.apiKey}`)
  }
  searchvideos(inputSearchvalue:any){
    console.log("service", inputSearchvalue)
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${inputSearchvalue}&key=${environment.apiKey}`)
  }
  getcategory() {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=in&key=${environment.apiKey}`)
  }
  selectedcategory(id:any) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=${id}&regionCode=in&key=${environment.apiKey}`)
  }
  addtofavorites(video:any){
    return this.http.post('http://localhost:9000/auth/favorites',video,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
  getFavorites(){
    return this.http.get('http://localhost:9000/auth/favorites',{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
  isAuthenticated(){
    return this.http.post('http://localhost:9000/auth/isAuthenticated',{},{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }
}
