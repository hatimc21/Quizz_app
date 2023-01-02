import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
  const score = this.route.snapshot.queryParamMap.get('score');
  const total = this.route.snapshot.queryParamMap.get('total');
  const name = this.route.snapshot.queryParamMap.get('name');
  const quizz_nom = this.route.snapshot.queryParamMap.get('quizz_nom');
  console.log( score);
  console.log(total);
  console.log(name);
  console.log(quizz_nom);
  }

}
