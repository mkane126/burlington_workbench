import { Component, OnInit, Inject } from '@angular/core';
import { Report } from 'src/app/Report';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  description: string;
  tool_type: number;
  tool_group: number;
  url: string;
  img : string;
}

@Component({
  selector: 'app-tool-dialog',
  templateUrl: './tool-dialog.component.html',
  styleUrls: ['./tool-dialog.component.css']
})
export class ToolDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ToolDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  
}
