import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const ROUTES: Array<Route> = [{
  path: '',
  component: SummaryComponent
}];

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ]
})
export class SummaryModule { }
