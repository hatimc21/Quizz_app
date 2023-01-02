import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [DatePipe]
})
export class ResultsComponent implements OnInit {
  score: any;
  total: any;
  name: any;
  quizz_nom: any;
  scorper: any;
  todaydate: any;
  pdf: any;

  constructor(private route: ActivatedRoute, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.score = this.route.snapshot.queryParamMap.get('score');
    this.total = this.route.snapshot.queryParamMap.get('total');
    this.name = this.route.snapshot.queryParamMap.get('name');
    this.quizz_nom = this.route.snapshot.queryParamMap.get('quizz_nom');
    this.scorper = (this.score * 100) / this.total;
    this.todaydate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
    console.log(this.todaydate);
    this.generatePDF();
  }

  generatePDF() {
    setTimeout(() => {
      const element = document.getElementById('certif');
      if (element) {
        html2canvas(element).then((canvas) => {
          // Few necessary setting options
          const imgWidth = 208;
          const imgHeight = canvas.height * imgWidth / canvas.width;

          const contentDataURL = canvas.toDataURL('image/png');
          const pdfWidth = element.offsetWidth;
          const pdfHeight = element.offsetHeight;
           const pdf = new jspdf();
          const position = 0;
          pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
           // Generated PDF
        });
      }
    }, 1000);
  }
}
