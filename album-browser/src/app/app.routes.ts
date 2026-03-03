import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about-component/about-component';
import { HomeComponent } from './components/home-component/home-component';
import { AlbumsComponent } from './components/albums-component/albums-component';
import { AlbumDetailComponent } from './components/album-detail-component/album-detail-component';
import { AlbumPhotosComponent } from './components/album-photos-component/album-photos-component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'albums', component: AlbumsComponent},
    {path: 'albums/:id', component: AlbumDetailComponent},
    {path: 'albums/:id/photos', component: AlbumPhotosComponent}
];

