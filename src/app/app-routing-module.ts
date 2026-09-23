import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';
import { Services } from './services/services';
import { Signup } from './signup/signup';
import { Logic } from './logic/logic';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'services', component: Services },
  { path: 'signup', component: Signup },
  { path: 'login', component: Logic },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
