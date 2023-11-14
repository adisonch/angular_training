import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

const routes: Routes = [
  {
    path: 'binding-demo',
    component: BindingDemoComponent,
  },
  {
    path: 'directive-demo',
    component: DirectiveDemoComponent,
  },
  {
    path: 'pipe-demo',
    component: PipeDemoComponent,
  },
  {
    path: '**',
    component: BindingDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
