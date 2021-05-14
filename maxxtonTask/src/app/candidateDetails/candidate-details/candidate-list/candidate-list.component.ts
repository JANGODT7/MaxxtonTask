import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CandidateDataService } from 'src/app/shared/service/candidate-data.service';
import { Candidate } from '../interfaces/candidate.interface';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
})
export class CandidateListComponent implements OnInit, OnDestroy {
  candidateList: Candidate[] = [];
  tableData: Candidate[] = [];
  displayedColumns: string[] = [
    'Sr No',
    'Id',
    'Name',
    'Department',
    'Joining Date',
    'View Details'
  ];
  searchTerm = '';
  deparatmentList: string[] = [];
  canidateCountInDepartment = 0;
  department: any;

  constructor(
    private candidateDataService: CandidateDataService,
  ) {}

  ngOnInit() {
    this.getEmployeeDetails();
  }

  // to get employee details
  getEmployeeDetails() {
        this.candidateList = this.candidateDataService.shareCandidateDataService()
        this.tableData = this.candidateDataService.shareCandidateDataService();
        this.getDepartmentList(this.tableData);
  }

  // get department List
  getDepartmentList(deparatmentArr: Candidate[]) {
    this.deparatmentList = deparatmentArr.map((ele) => {
      return ele.department;
    });
    this.deparatmentList = [...new Set(this.deparatmentList)];
  }

  //to search Names
  searchNames() {
    if (this.searchTerm.length >= 1) {
      this.tableData = this.candidateList.filter((ele) => {
        return ele.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase());
      });
    } 
    else {
      this.tableData = this.candidateList;
    }
  }

  //to remove all developers
  removeAllDevelopers() {
    this.tableData = this.candidateList.filter((ele) => {
      return ele.department != 'Development';
    });
    /* update department array (this.deparatmentList) as we are 
    removing all department with name "Development" in above line of code */
    this.getDepartmentList(this.tableData);
  }

  //  get department Count
  getDepartmentEmployeeCount(event: any) {
    let temp = event.value;
    this.canidateCountInDepartment = 0;
    this.candidateList.map((ele) => {
      if (ele.department == temp) {
        this.canidateCountInDepartment++;
      }
    });
  }

  // unsubscribe observable to avoid memory leak
  ngOnDestroy() {
  }

  // sorting Names
  sortNames() {
    this.tableData = this.candidateDataService.shareCandidateDataService();
    this.tableData.sort(this.compare);
    this.getDepartmentList(this.candidateList)
  }

  // compare names and sort according to names
  compare(a: Candidate, b: Candidate) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  // calculate experience greator than 2 years ago
  experienceCalculator() {
    let currDate = new Date().getTime();
    let DifferenceInTime = 0;
    let DifferenceInDays = 0;
    this.tableData = [];
    for (let res of this.candidateList) {
      // To calculate the time difference of two dates
      DifferenceInTime = currDate - new Date(res.joining_date).getTime();
      // To calculate the Days difference of two dates
      DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);
      if (DifferenceInDays >= 730) {
        this.tableData.push(res);
      }
    }

    this.getDepartmentList(this.candidateList)
  }
}
