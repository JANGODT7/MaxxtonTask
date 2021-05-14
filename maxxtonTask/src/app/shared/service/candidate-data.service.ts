import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Candidate } from '../../candidateDetails/candidate-details/interfaces/candidate.interface';

@Injectable({
  providedIn: 'root',
})
export class CandidateDataService {
  candidateData: Candidate[] = [
    {
      id: 11,
      name: 'Ash',
      department: 'Finance',
      joining_date: '8 / 10 / 2016',
    },
    { id: 12, name: 'John', department: 'HR', joining_date: '18 / 1 / 2011' },
    {
      id: 13,
      name: 'Zuri',
      department: 'Operations',
      joining_date: '28 / 11 / 2019',
    },
    {
      id: 14,
      name: 'Vish',
      department: 'Development',
      joining_date: '7 / 7 / 2017',
    },
    {
      id: 15,
      name: 'Barry',
      department: 'Operations',
      joining_date: '19 / 8 / 2014',
    },
    {
      id: 16,
      name: 'Ady',
      department: 'Finance',
      joining_date: '5 / 10 / 2014',
    },
    {
      id: 17,
      name: 'Gare',
      department: 'Development',
      joining_date: '6 / 4 / 2014',
    },
    {
      id: 18,
      name: 'Hola',
      department: 'Development',
      joining_date: '8 / 12 / 2010',
    },
    { id: 19, name: 'Ola', department: 'HR', joining_date: '7 / 5 / 2011' },
    {
      id: 20,
      name: 'Kim',
      department: 'Finance',
      joining_date: '20 / 10 / 2010',
    },
  ];

  // shareCandidateData = new BehaviorSubject(this.candidateData);

  shareCandidateDataService() {
    this.dateParser(this.candidateData);
    return this.candidateData
  }

  // dto parse Date
  dateParser(data: Candidate[]) {
    data.map((res) => {
      if (typeof res.joining_date === 'string') {
        var newdate = res.joining_date.split('/').reverse().join('/');
        res.joining_date = new Date(newdate);
      }
    });
  }

  // get candidates details by id
  ShareCandidateDetailsById(id: number) {
    var employeeObj = this.candidateData.find((res) => {
      return res.id === Number(id);
    });
    const employeeObservable = new Observable((observer) => {
      observer.next(employeeObj);
    });
    return employeeObservable;
  }
  constructor() {}
}
