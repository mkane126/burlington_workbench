import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './component/reports/reports.component';
import { ReportItemComponent } from './component/report-item/report-item.component';
import { ButtonComponent } from './component/button/button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToolDialogComponent } from './component/tool-dialog/tool-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { EditComponent } from './component/edit/edit.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './component/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    ReportItemComponent,
    routingComponents,
    ButtonComponent,
    ToolDialogComponent,
    EditComponent,
    SearchbarComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [ToolDialogComponent]
})
export class AppModule { }
