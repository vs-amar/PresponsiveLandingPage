import { PaymentformComponent } from './paymentform/paymentform.component';
import { ListofbooksComponent } from './listofbooks/listofbooks.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'landingpage',
    component:LandingpageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'UserHome',
    component:UserPageComponent
  },
  {
    path:'booklist',
    component:ListofbooksComponent
  },
  {
    path:'payment',
    component:PaymentformComponent
  },
  {
    path:'',
    redirectTo:'landingpage',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
