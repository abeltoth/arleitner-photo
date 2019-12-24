import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    ShellComponent,
    SpinnerComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxSpinnerModule,
  ],
  exports: [
    ShellComponent,
    SpinnerComponent,
    NavbarComponent
  ],
})
export class SharedModule { }
