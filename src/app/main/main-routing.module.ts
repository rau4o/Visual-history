import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';

const routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: '',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    NavigationBarComponent
  ],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class MainRoutingModule {}
