import { Component, OnInit, Input} from '@angular/core';
import { Report } from 'src/app/Report';
import { ReportService } from 'src/app/service/report.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  filterTerm!: string;
  @Input() admin: boolean;
  reports: Report[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportService.currentData.subscribe(currentData => this.updateReport(currentData))
    this.reportService.getReports().subscribe((reports) => (this.reports = reports));
  }

  addReport(report: Report) {

    this.reportService.addReport(report).subscribe((report) => this.reports.push(report));
  }
  updateReport(report: Report) {
    console.log("here")
    this.reportService.updateReport(report).subscribe();
    this.reportService.getReports().subscribe((reports) => (this.reports = reports));
  }
  filter(reportList: Report[]): Report[]{
    let result: Report[] = [];
    if(this.filterTerm=='' || this.filterTerm==null){
      result = this.reports;
    }
    else{
      for(let i = 0; i < this.reports.length ; i++){
        if (this.reports[i].name.toLowerCase().includes(this.filterTerm.toLowerCase())){
          result.push(this.reports[i])
        }
      }
    }
    
    return result
  }


}
