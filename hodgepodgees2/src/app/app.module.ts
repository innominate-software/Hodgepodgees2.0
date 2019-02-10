import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterComponent } from './footer/footer.component';
import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';


export const routerConfig: Routes = [
  {
      path: 'home',
      component: HomePageComponent
  },
  {
      path: 'about',
      component: AboutPageComponent
  },
  {
      path: 'products',
      component: ProductsComponent
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    AboutPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
