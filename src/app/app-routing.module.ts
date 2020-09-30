import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateUnicornComponent} from './create-unicorn/create-unicorn.component';

const routes: Routes = [{path: 'create', component: CreateUnicornComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
