import { Component, inject } from '@angular/core';
import { AlbumService } from '../../album-service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../models/photo.model';
import { signal } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-album-photos-component',
  imports: [RouterLink],
  templateUrl: './album-photos-component.html',
  styleUrl: './album-photos-component.css',
})
export class AlbumPhotosComponent {
  route = inject(ActivatedRoute);
  albumService = inject(AlbumService);

  photos = signal<Photo[] | null>(null);
  id : number = parseInt(this.route.snapshot.paramMap.get('id')!);
  ngOnInit(){
    
    if (this.id) {
      const albumid = this.id;
      this.albumService.getAlbumPhotos(albumid).subscribe({
      next: (response) => {
        this.photos.set(response);
        console.log(response)
      }
    })
  }
    
}
}
