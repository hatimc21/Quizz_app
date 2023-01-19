import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as math from 'mathjs';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})

export class QuizzComponent implements OnInit,OnDestroy {
  math = math;
  quizz: any;
  currentQuestionIndex = 0;
  score = 0;
  timer : any;
  name = '';
  name1 = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}
  shuffleArray(array:any) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    
    if(id){
      this.http.get('assets/data/quizzes.json').subscribe((quizzes: any) =>{
        this.quizz = quizzes[id];
        this.quizz.quizzes.questions = this.shuffleArray(this.quizz.quizzes.questions);
        for (let j = 0; j < this.quizz.quizzes.questions.length; j++) {
          this.quizz.quizzes.questions[j].options = this.shuffleArray(this.quizz.quizzes.questions[j].options)
          
        }
        console.log(this.quizz);
        this.timer = this.quizz.quizzes.duration * 60;
        console.log(this.timer);
        console.log(this.quizz.nom);
        setInterval(() => {
          this.timer--;
          if (this.timer === 0) {
             // Quiz is complete
            clearInterval(this.timer);
            this.showResults();
          }
        }, 10000);
      });
      
    }
  }
  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
  startQuiz() {
    this.name = this.name1;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.timer = this.quizz.quizzes.duration * 60;
    setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
         // Quiz is complete
        clearInterval(this.timer);
        this.showResults();
      }
    }, 1000);
  }
  submitAnswer(answer:any) {
    if (answer === this.quizz.quizzes.questions[this.currentQuestionIndex].correct) {
      this.score++;
    }
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex === this.quizz.quizzes.questions.length) {
      // Quiz is complete
      clearInterval(this.timer);
      this.showResults();
    }
  }

  showResults() {
    // Display the results to the user
    this.router.navigate(['/results'], { queryParams: { score: this.score, total: this.quizz.quizzes.questions.length, name: this.name, quizz_nom:this.quizz.quizzes.nom} });
  }
}







