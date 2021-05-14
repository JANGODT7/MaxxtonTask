import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateDetailsModule } from './candidateDetails/candidate-details/module/candidate-details.module';

const routes: Routes = [{path:'',
  loadChildren: () => import(`./candidateDetails/candidate-details/module/candidate-details.module`).then(m => m.CandidateDetailsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),CandidateDetailsModule],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  


}
