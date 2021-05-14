import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateDataService } from 'src/app/shared/service/candidate-data.service';
import { Candidate } from 'src/app/candidateDetails/candidate-details/interfaces/candidate.interface';
import { MatDialog } from '@angular/material/dialog';
import { CandidateDetailsDialogComponent } from '../../candidate-details-dialog/candidate-details-dialog.component';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  CandidateId:any 
  candidateDetails:Candidate | undefined
  constructor(private candidateDataService:CandidateDataService,private ActivatedRoute:ActivatedRoute,public dialog: MatDialog) { 
    this.ActivatedRoute.params.subscribe( params =>  this.CandidateId=params.id );   
  }

  openDialog() {
    const dialogRef = this.dialog.open(CandidateDetailsDialogComponent,{
      data:this.candidateDetails,
      height: '350px',
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


  ngOnInit(): void {
    this.getCandidateDetails()
  }


  getCandidateDetails(){
    this.candidateDataService.ShareCandidateDetailsById(this.CandidateId).subscribe((res:any)=>{
     this.candidateDetails = res
    })
    this.openDialog()
  }

}
