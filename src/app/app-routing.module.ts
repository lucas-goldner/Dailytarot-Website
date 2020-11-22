import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule, MatSliderModule],
})
export class AppRoutingModule {}
