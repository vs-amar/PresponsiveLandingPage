import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatDialogModule, MatRippleModule, MatMenuModule } from '@angular/material';
import { UserPageComponent } from './user-page/user-page.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { ListofbooksComponent } from './listofbooks/listofbooks.component';
import { PaymentformComponent } from './paymentform/paymentform.component';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginComponent,
    UserPageComponent,
    ListofbooksComponent,
    PaymentformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [
    DatePipe,
    LandingpageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
