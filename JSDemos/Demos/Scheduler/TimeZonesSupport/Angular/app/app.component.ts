import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSchedulerModule, DxSelectBoxModule, DxTemplateModule } from 'devextreme-angular';
import { getTimeZones, dxSchedulerTimeZone } from 'devextreme/time_zone_utils';
import { Service, Data } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [Service],
  preserveWhitespaces: true,
})
export class AppComponent {
  currentDate: Date = new Date(2021, 3, 27);

  timezone: string;

  locations: string[];

  dataSource: Data[];

  demoLocations: dxSchedulerTimeZone[];

  service: Service;

  constructor(service: Service) {
    this.service = service;
    this.demoLocations = this.getLocations(this.currentDate);
    this.dataSource = service.getData();
    this.timezone = this.demoLocations[0].id;
    this.currentDate = this.currentDate;
  }

  getLocations(date: Date) {
    const timeZones = getTimeZones(date);
    return timeZones.filter((timeZone) => this.service.getLocations().indexOf(timeZone.id) !== -1);
  }

  onValueChanged(e: any) {
    this.timezone = e.value;
  }

  onAppointmentFormOpening(e: any) {
    const form = e.form;

    const startDateTimezoneEditor = form.getEditor('startDateTimeZone');
    const endDateTimezoneEditor = form.getEditor('endDateTimeZone');
    const startDateDataSource = startDateTimezoneEditor.option('dataSource');
    const endDateDataSource = endDateTimezoneEditor.option('dataSource');

    startDateDataSource.filter(['id', 'contains', 'Europe']);
    endDateDataSource.filter(['id', 'contains', 'Europe']);

    startDateDataSource.load();
    endDateDataSource.load();
  }

  onOptionChanged(e) {
    if (e.name === 'currentDate') {
      this.demoLocations = this.getLocations(e.value);
    }
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxSchedulerModule,
    DxTemplateModule,
    DxSelectBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
