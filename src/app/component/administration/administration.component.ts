import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToolDialogComponent } from '../tool-dialog/tool-dialog.component';
import { Report } from 'src/app/Report';
import { Output, EventEmitter } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  @Output() onAddReport: EventEmitter<Report> = new EventEmitter();
  passedValues: object;
  description: string;
  toolID: number;
  name: string;
  tool_type: number;
  tool_group: number;
  url: string;
  img : string;
  reports: Report[];
  date: string;
  tempDate: Date;

  constructor(public dialog: MatDialog, private reportService: ReportService,public datepipe: DatePipe) { }

  openDialog(){
    let dialogRef = this.dialog.open(ToolDialogComponent, {
      data: {id: this.toolID, name: this.name, description: this.description, tool_type: this.tool_type, tool_group: this.tool_group, url: this.url, img: this.img, date: this.date }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
      console.log('Dialog result', result);
      this.passedValues = result;
      this.toolID = result.toolID
      this.name = result.name;
      this.description = result.description;
      this.tool_type = result.tool_type;
      this.tool_group = result.tool_group;
      this.url = result.url;
      this.img = result.img;
      this.tempDate = new Date(Date.now());
      this.date = String(this.datepipe.transform(this.tempDate, 'MM/dd/yyyy'));
      this.onSubmit();
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const newReport: Report = {
      toolID:8,
      name: this.name,
      description: this.description,
      toolType: this.tool_type,
      toolGroup: this.tool_group,
      url: this.url,
      IMG: this.img,
      create_date: this.date
    };

    console.log(newReport);
    this.reportService.addReport(newReport).subscribe((newReport) => (this.reports.push(newReport)));

    this.toolID=-1;
    this.name = '';
    this.description = '';
    this.tool_type = -1;
    this.tool_group = -1;
    this.url ='';
    this.img = '';
    this.date = '';
    
    location.reload();
  }
}
