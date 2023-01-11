import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { QuizsComponent } from './quizs/quizs.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ResultsComponent } from './results/results.component';
import { TipsComponent } from './tips/tips.component';
import { HomeComponent } from './home/home.component';
import { DATAComponent } from './data/data.component';
import { PythonComponent } from './python/python.component';
import { SqlComponent } from './sql/sql.component';

const routes: Routes = [
  { path: 'cours', component: CoursComponent },
  { path: 'quizzes', component: QuizsComponent },
  { path: 'quizzes/quizz/:id', component: QuizzComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'python', component: PythonComponent},
  { path: 'sql', component: SqlComponent},
  { path: 'data', component: DATAComponent},
  { path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
