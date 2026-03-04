import { Component } from '@angular/core';
import { AlbumService } from '../../album-service';
import { Album } from '../../models/album.model';
import { signal } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-albums-component',
  imports: [RouterLink],
  templateUrl: './albums-component.html',
  styleUrl: './albums-component.css',
})
export class AlbumsComponent {
  constructor(private albumService: AlbumService) {}
  albums = signal<Album[]>([]);
  
  ngOnInit(){
    this.albumService.getAlbums().subscribe({
      next: (response) => {
        this.albums.set(response);
        
      }
    })
  }
  delAlbum(id: number){
    this.albumService.deleteAlbum(id).subscribe({
      next: (response) => {
        console.log(this.albums())
        this.albums.update(cur => cur.filter(album => album.id != id));
        console.log(this.albums())
        
      },
      error: (response) => {
        this.albums.update(cur => cur.filter(album => album.id != id));
      }
      
    })

    
  }
  editTitle(alb: Album, str: string){
    this.albumService.editTitle(alb, str).subscribe({
      error: (res) => {
        this.albums.update(cur => cur.map(val => {
          if(val !== alb) return val;
          return {...alb, title:str};
        }));
      }
    })

    
  }
  
  
}
