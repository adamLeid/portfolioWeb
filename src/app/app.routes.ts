import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'experience', component: ExperienceComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: HomeComponent},
];
