import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursComponent } from './cours/cours.component';
import { QuizsComponent } from './quizs/quizs.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizzComponent } from './quizz/quizz.component';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { TipsComponent } from './tips/tips.component';
import { HomeComponent } from './home/home.component';
import { DATAComponent } from './data/data.component';
import { PythonComponent } from './python/python.component';
import { SqlComponent } from './sql/sql.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursComponent,
    QuizsComponent,
    QuizzComponent,
    ResultsComponent,
    TipsComponent,
    HomeComponent,
    DATAComponent,
    PythonComponent,
    SqlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
