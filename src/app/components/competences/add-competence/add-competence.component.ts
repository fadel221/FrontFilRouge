import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * @title Tab group animations
 */
@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {

  
  groupecmps = [
    {
      "id":1,
      "libelle":"Developper le back-end d'une appli"
    },
    {
      "id":2,
      "libelle":"Réaliser un site web avec wordPress"
    },
    {
      "id":3,
      "libelle":"Developper le fron-end d'une appli"
    }
  ]

  constructor(
    
  ) { }

  ngOnInit(): void {
    
    };
  
   niveaux:any[] = [
    {
      "grpAction":"consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet,  tempor incididunt ut labore et dolore magna aliqua",
      "critereEval":"Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      "grpAction":"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "critereEval":"Consectetur adipiscing elit. Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      "grpAction":"Adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur  tempor incididunt ut labore et dolore magna aliqua",
      "critereEval":"Eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    }
  ]
  

  
}