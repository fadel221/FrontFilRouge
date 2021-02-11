import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule } from '@angular/material/list';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule} from '@angular/material/tabs';
//import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSortModule } from '@angular/material/sort';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const MaterialComponents=
[
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTableModule,
  MatDialogModule,
  //FlexLayoutModule,
  MatCheckboxModule,
  MatMenuModule,
  MatExpansionModule,
  MatListModule,
  MatChipsModule,
  MatTabsModule,
  //MaterialFileInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule
]

@NgModule({
  
  imports: [
    MaterialComponents
  ],

  exports: [
  MaterialComponents
  ]
})

export class MaterialModule 
{ }
