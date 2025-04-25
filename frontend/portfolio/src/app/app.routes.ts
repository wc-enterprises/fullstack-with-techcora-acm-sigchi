import { Routes } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { WorkshopComponent } from './workshop/workshop.component';

export const routes: Routes = [
  { path: 'workshop', component: WorkshopComponent },
  { path: 'personal', component: PersonalComponent },
  { path: '', redirectTo: '/workshop', pathMatch: 'full' }, // Optional: redirect empty path to workshop
];
