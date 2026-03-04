import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './models/album.model';
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
  deleteAlbum(id: number): Observable<void>{
    return this.http.delete<void>(this.url + '/album/' + id);
  }
  editTitle(album: Album,str: string): Observable<void>{
    return this.http.patch<void>(this.url + '/album/' + album.id, {...album, title : str});
  }
}
