import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css'],
  providers: [DatePipe]
})
export class TipsComponent implements OnInit {
  tip:any;
  todaydate: string | null;
  constructor (private datePipe: DatePipe){
    this.todaydate='N/A';
  }
  ngOnInit(): void {
    const tips = [
      'Drink plenty of water',
      'Get regular exercise',
      'Get enough sleep',
      'Eat a healthy diet',
      'Take breaks and relax',
      'Reduce stress',
      'Practice good hygiene',
      'Manage your time effectively',
      'Set goals and work towards them',
      'Learn something new every day',
      'Practice gratitude',
      'Be kind and compassionate',
      'Practice mindfulness',
      'Take care of your mental health',
      'Keep a positive attitude',
      'Practice deep breathing',
      'Get out in nature',
      'Connect with others',
      'Volunteer your time',
      'Practice forgiveness',
      'Take care of your physical health',
      'Get regular check - ups',
      'Get vaccinated',
      "Don't smoke",
      'Limit alcohol consumption',
      'Wear sunscreen',
      'Use insect repellent',
      'Get plenty of sunlight',
      'Exercise your brain',
      'Read books',
      'Play games',
      'Do puzzles',
      'Write in a journal',
      'Learn a new language',
      'Practice meditation',
      'Take up a hobby',
      'Practice deep work',
      'Learn about productivity',
      'Practice time management',
      'Get organized',
      'Find a healthy work - life balance',
      'Practice self - care',
      'Take breaks and vacations',
      'Get massages',
      'Get a manicure or pedicure',
      'Take a bubble bath',
      'Practice yoga or other forms of exercise',
      "Get a good night's sleep",
      'Eat a healthy breakfast',
      'Plan your meals and snacks',
      'Eat more fruits and vegetables',
      'Limit processed and junk food',
      'Eat a balanced diet',
      "Don't skip meals",
      'Practice portion control',
      'Drink plenty of water',
      'Eat slowly',
      'Eat mindfully',
      'Cook at home',
      'Experiment with new recipes',
    ]
    const dateString = this.datePipe.transform(new Date(), 'MMM dd');
    this.todaydate = dateString || this.todaydate;
    this.tip = tips[Math.floor(Math.random() * tips.length)];
    console.log(this.tip);
    
  }
  

}
