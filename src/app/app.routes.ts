import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', component: NotFoundComponent }
];
