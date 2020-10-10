import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormTechComponent } from './form-tech/form-tech.component';
import { CommunicationTechComponent } from './communication-tech/communication-tech.component';
import { HttpTechComponent } from './http-tech/http-tech.component';
import { AccuracyDirective, AccuracyPipe, PipeDirectiveTechComponent } from './pipe-directive-tech/pipe-directive-tech.component';
import { LifecycleHookTechComponent } from './lifecycle-hook-tech/lifecycle-hook-tech.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './app-routing.module';
import { ParentComponent } from './communication-tech/parent/parent.component';
import { Child1Component } from './communication-tech/child1/child1.component';
import { Child2Component } from './communication-tech/child2/child2.component';
import { ReactiveComponent } from './form-tech/reactive/reactive.component';
import { FloatValidatorDirective, TemplateDrivenComponent } from './form-tech/template-driven/template-driven.component';
import { ChildComponent } from './lifecycle-hook-tech/child/child.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    FormTechComponent,
    CommunicationTechComponent,
    HttpTechComponent,
    PipeDirectiveTechComponent,
    LifecycleHookTechComponent,
    HomeComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    AccuracyPipe,
    AccuracyDirective,
    ReactiveComponent,
    TemplateDrivenComponent,
    ChildComponent,
    FloatValidatorDirective,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RoutingModule,
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
