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
  
  
}
