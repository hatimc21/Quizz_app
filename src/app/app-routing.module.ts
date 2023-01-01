import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { QuizsComponent } from './quizs/quizs.component';

const routes: Routes = [
  {path:'cours', component: CoursComponent},
  {path:'quizzes', component: QuizsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
