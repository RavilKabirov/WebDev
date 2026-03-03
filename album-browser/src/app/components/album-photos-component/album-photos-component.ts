import { Component } from '@angular/core';
import { AlbumService } from '../../album-service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../models/photo.model';
import { signal } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-album-photos-component',
  imports: [],
  templateUrl: './album-photos-component.html',
  styleUrl: './album-photos-component.css',
})
export class AlbumPhotosComponent {
  constructor(private albumService: AlbumService,
    private route: ActivatedRoute,
  ) {}
  photos = signal<Photo[] | null>(null);
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const albumid = +id;
      this.albumService.getAlbumPhotos(albumid).subscribe({
      next: (response) => {
        this.photos.set(response);
        console.log(response)
      }
    })
  }
    
}
}
