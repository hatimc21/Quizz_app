import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quizs',
  templateUrl: './quizs.component.html',
  styleUrls: ['./quizs.component.css']
})
export class QuizsComponent implements OnInit {
  quizzes: any;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router) {
  }
  ngOnInit(): void {
    this.http.get('assets/data/quizzes.json').subscribe((quizzes: any) =>{
      this.quizzes = quizzes;
      console.log(quizzes);
    });
  }

}
