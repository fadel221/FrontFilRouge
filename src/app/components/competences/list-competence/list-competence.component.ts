import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-competence',
  templateUrl: './list-competence.component.html',
  styleUrls: ['./list-competence.component.css']
})
export class ListCompetenceComponent implements OnInit {

  constructor(private route:Router) { }
  Add()
  {
    this.route.navigate(['competences/add']);
  }
  ngOnInit(): void {
  }

}
