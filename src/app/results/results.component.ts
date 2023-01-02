import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [DatePipe]
})
export class ResultsComponent implements OnInit {
  score:any;
  total:any;
  name: any;
  quizz_nom :any;
  scorper:any;
  todaydate : any;
  constructor(private route: ActivatedRoute,private datePipe: DatePipe) { }

  ngOnInit(): void {
  this.score = this.route.snapshot.queryParamMap.get('score');
  this.total = this.route.snapshot.queryParamMap.get('total');
  this.name = this.route.snapshot.queryParamMap.get('name');
  this.quizz_nom = this.route.snapshot.queryParamMap.get('quizz_nom');
  this.scorper = (this.score*100)/this.total;
  this.todaydate = this.datePipe.transform((new Date), 'dd/MM/yyyy');
  console.log(this.todaydate);

  }

}
