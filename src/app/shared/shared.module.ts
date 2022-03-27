import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components';
import { SumPipe } from './pipes';

const COMPONENTS = [
  HeaderComponent
];

const PIPES = [
  SumPipe
]

@NgModule({
  declarations: [
    COMPONENTS,
    PIPES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    COMPONENTS,
    PIPES
  ]
})
export class SharedModule { }
