import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Report } from 'src/app/Report';
import { MatDialog } from '@angular/material/dialog';
import { ReportService } from 'src/app/service/report.service';
import { DatePipe, registerLocaleData } from '@angular/common';
import { EditComponent } from '../edit/edit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-item',
  templateUrl: './report-item.component.html',
  styleUrls: ['./report-item.component.css']
})
export class ReportItemComponent implements OnInit {
  @Input() report: Report;
  @Input() admin: boolean;
  
  @Output() onAddReport: EventEmitter<Report> = new EventEmitter();
  toolID: number;
  passedValues: object;
  description: string;
  name: string;
  tool_type: number;
  tool_group: number;
  url: string;
  img : string;
  reports: Report[];
  date: string;
  tempDate: string;
  
  constructor(public dialog: MatDialog, private reportService: ReportService,public datepipe: DatePipe,private router: Router) { }

  dateFormat(): string{
    this.tempDate = this.report.create_date;
    this.date = this.datepipe.transform(this.tempDate, "MM/dd/yyyy") || '';
    return this.date;
  }

  toolTypeConv(): string | number{
    if (this.report.toolType == 1){
      return "Report";
    }
    else if (this.report.toolType == 2){
      return "Tool";
    }
    else{
      return this.report.toolType;
    }
  }

  toolGroupConv(): string | number{
    if (this.report.toolGroup == 1){
      return "Merchant";
    }
    else if (this.report.toolGroup == 2){
      return "Planner";
    }
    else{
      return this.report.toolGroup;
    }
  }

  openDialog(){
    this.toolID = this.report.toolID;
    this.name = this.report.name;
    this.description = this.report.description;
    this.tool_group = this.report.toolGroup;
    this.tool_type = this.report.toolType;
    this.url = this.report.url;
    this.img = this.report.IMG; 
    
    let dialogRef = this.dialog.open(EditComponent, {
      data: {toolID: this.toolID, name: this.name, description: this.description, tool_type: this.tool_type, tool_group: this.tool_group, url: this.url, img: this.img, date: this.date }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.name = result.name;
      this.toolID = result.toolID
      this.description = result.description;
      this.tool_type = result.tool_type;
      this.tool_group = result.tool_group;
      this.url = result.url;
      this.img = result.img;
      this.tempDate = this.report.create_date;
      this.date = this.datepipe.transform(this.tempDate, "MM,dd,yyyy") || '';
      this.onSubmit();
    });
    
  }

  onSubmit() {
    const newReport: Report = {
      toolID: this.toolID, 
      name: this.name,
      description: this.description,
      toolType: this.tool_type,
      toolGroup: this.tool_group,
      url: this.url,
      IMG: this.img,
      create_date: this.date
    };

    this.reportService.updateMessage(newReport);
    
    //this.reportService.updateReport(newReport).subscribe();

    
  }
  



  ngOnInit(): void {
  }

}
