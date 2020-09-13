import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TestComponent } from './test/test.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegistrationScreenComponent } from './registration-screen/registration-screen.component';


const routes: Routes = [
  { path: 'home-screen', component: HomeScreenComponent },
  { path: 'login-screen', component: LoginScreenComponent },
   { path: 'registration-screen', component: RegistrationScreenComponent },
  { path: 'test-screen', component: TestComponent },
  { path: '', redirectTo: 'home-screen', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
