import {Routes, RouterModule} from '@angular/router'

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { LoginComponent } from './pages/login/login.component';



const routes: Routes = [
    { 
        path:'',
        component: HomeComponent
    },
    { 
        path:'home',
        component: HomeComponent
    },
    { 
        path:'login',
        component: LoginComponent
    },
    { 
        path:'about/:parametro',
        component: AboutComponent
    },
    { 
        path:'clientes/:parametro',
        component: ClientesComponent
    },
    { 
        path:'contact',
        component: ContactComponent
    },
    { 
        path:'**',
        component: ErrorComponent
    }
]

export const RoutingModule = RouterModule.forRoot(routes);