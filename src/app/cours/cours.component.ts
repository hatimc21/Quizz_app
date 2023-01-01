import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})

export class CoursComponent implements OnInit {
  cours: any;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router) {
  }
  ngOnInit(): void {
    this.http.get('assets/data/cours.json').subscribe((cours: any) =>{
      this.cours = cours;
      console.log(cours);
    });
  }

}