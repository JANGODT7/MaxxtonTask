import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateListComponent } from '../candidate-list/candidate-list.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { CandidateRoutingModule } from '../routes/candidate-routing/candidate-routing.module';
import {MatCardModule} from '@angular/material/card';
import { CandidateDetailsComponent } from '../candidate-details/candidate-details/candidate-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CandidateDetailsDialogComponent } from '../candidate-details-dialog/candidate-details-dialog.component';


@NgModule({
  declarations: [CandidateListComponent,CandidateDetailsComponent,CandidateDetailsDialogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    CandidateRoutingModule,
    MatCardModule,
    MatDialogModule,

  ],
  exports: [CandidateListComponent],
})
export class CandidateDetailsModule {} 
