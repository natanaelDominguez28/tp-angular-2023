import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto5FormComponent } from './components/punto5-form/punto5-form.component';
import { Punto2Component } from './components/punto2/punto2.component';

const routes: Routes = [
  { path: 'punto1', component: Punto1Component },
  { path: 'punto2', component: Punto2Component },
  { path: 'punto5', component: Punto5FormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'punto1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
