import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from '../Report';
import { BehaviorSubject} from 'rxjs';

let header = new HttpHeaders().set("Authorization","1234");
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private data = new BehaviorSubject<Report>({toolID:-1,name:'',description:'',toolGroup:-1,toolType:-1,url:'',IMG:'',create_date:''});
  currentData = this.data.asObservable()
  
  private apiUrl = 'http://localhost:5000/reports';

  constructor(private http: HttpClient) {}

  getReports(): Observable<Report[]> {
    let header = new HttpHeaders().set("Authorization","1234");
    return this.http.get<Report[]>('https://dlmma1.burlington.com:3000/merchant-workbench-tools/v1', {headers: header});
  }

  deleteReport(report: Report): Observable<Report> {
    const url = `${this.apiUrl}/${report.toolID}`;
    return this.http.delete<Report>(url);
  }

  updateMessage(item: any) {
    this.data.next(item);
  }

  updateReport(report: Report): Observable<Report> {
    let header = new HttpHeaders().set("Authorization","1234");
    const url = 'https://dlmma1.burlington.com:3000/merchant-workbench-tools/v1';
    
    return this.http.patch<Report>(url, report, {headers: header});
  }

  addReport(report: Report): Observable<Report> {
    let header = new HttpHeaders().set("Authorization","1234").set('Content-Type','application/json').set('accept', '*/*');
    let newResult = {
      "name" : report.name,
      "description" : report.description,
      "toolType" : report.toolType,
      "toolGroup" : report.toolGroup,
      "url" : report.url,
      "IMG" : report.IMG
    }    

    console.log(newResult)
    return this.http.post<Report>('https://dlmma1.burlington.com:3000/merchant-workbench-tools/v1', newResult, {headers: header});
  }
}
