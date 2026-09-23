import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Logic } from './logic/logic';
import { Signup } from './signup/signup';
import { AboutUs } from './about-us/about-us';
import { Services } from './services/services';

@NgModule({
  declarations: [App, Home, Logic, Signup, AboutUs, Services],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
