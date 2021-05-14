import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from '../../candidate-list/candidate-list.component';
import { CandidateDetailsComponent } from '../../candidate-details/candidate-details/candidate-details.component';

const routes:Routes = [{
  path:'candidateList',component:CandidateListComponent
},{
  path:'candidate/:id',component:CandidateDetailsComponent
},
{path: '', redirectTo: 'candidateList',pathMatch:'full'}, 
]


@NgModule({  
  declarations: [],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CandidateRoutingModule { }
