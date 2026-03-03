import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}
  private url = 'https://jsonplaceholder.typicode.com';
  private flag = false;
  getAlbums(): Observable<any>{
    return this.http.get<any>(this.url + '/albums');
  }
  getAlbum(id: number): Observable<any>{
    return this.http.get(this.url + '/albums/' + id);
  }
  getAlbumPhotos(id: number): Observable<any>{
    return this.http.get(this.url + '/album/' + id + '/photos')
  }
  
}
