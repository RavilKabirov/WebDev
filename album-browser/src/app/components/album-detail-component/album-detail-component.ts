import { Component } from '@angular/core';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../album-service';
import { signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-album-detail-component',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail-component.html',
  styleUrl: './album-detail-component.css',
})
export class AlbumDetailComponent {
  constructor(private albumService: AlbumService,
    private route: ActivatedRoute,
  ) {}
  str: string = '';
  album = signal<Album | null>(null);
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const albumid = +id;
      this.albumService.getAlbum(albumid).subscribe({
      next: (response) => {
        this.album.set(response);
        
      }
    })
  }
}
  editTitle(alb: Album, str: string){
    this.albumService.editTitle(alb, str).subscribe({
      error: (res) => {
        this.album.update(cur => {return {...cur!, title: str}});
      }
    })

    
  }

}
