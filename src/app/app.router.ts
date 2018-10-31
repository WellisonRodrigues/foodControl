import { Routes, RouterModule, CanActivate } from '@angular/router'

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ClientesCadastroComponent } from './pages/clientes-cadastro/clientes-cadastro.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { AuthService } from './service/auth.service'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthService]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'produtos',
        component: ProdutosComponent,
        canActivate: [AuthService]
    },
    {
        path: 'about/:parametro',
        component: AboutComponent,
        canActivate: [AuthService]
    },
    {
        path: 'vendas',
        component: VendasComponent,
        canActivate: [AuthService]
    },
    {
        path: 'clientes',
        component: ClientesComponent,
        canActivate: [AuthService]
    },
    {
        path: 'cliente/cadastro',
        component: ClientesCadastroComponent,
        canActivate: [AuthService]
    },
    {
        path: 'cliente/cadastro/:id',
        component: ClientesCadastroComponent,
        canActivate: [AuthService]
    },

    {
        path: 'contact',
        component: ContactComponent,
        canActivate: [AuthService]
    },
    {
        path: '**',
        component: ErrorComponent,
    }
]

export const RoutingModule = RouterModule.forRoot(routes);