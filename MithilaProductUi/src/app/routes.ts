import { Routes} from '@angular/router'
import { CarouselPanelComponent } from './home/carousel-panel/carousel-panel.component';
import { AboutComponent } from './About/about/about.component';
import {HomeComponentComponent} from './home/home-component/home-component.component';
import {ProductHomeComponent} from './shop/product-home/product-home.component';

export const appRoutes : Routes = [
    {path: 'Home', component: HomeComponentComponent},
    {path: 'About', component: AboutComponent}, 
    {path: 'Shop', component: ProductHomeComponent},  // events/1 or //events/foo
    { path: '', redirectTo: '/Home', pathMatch: 'full' } // default path where pathMatch can accept prefix or full
]