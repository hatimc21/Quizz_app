import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { QuizsComponent } from './quizs/quizs.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ResultsComponent } from './results/results.component';
import { TipsComponent } from './tips/tips.component';

const routes: Routes = [
  { path: 'cours', component: CoursComponent },
  { path: 'quizzes', component: QuizsComponent },
  { path: 'quizzes/quizz/:id', component: QuizzComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'tips', component: TipsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
