import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { PagrindinisComponent } from './home/pagrindinis.component';
import { ProduktaiComponent } from './produktai/produktai.component';

const routes: Routes = [
  {path: '', component: PagrindinisComponent},
  {path: 'test-error', component: TestErrorComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'produktai', canActivate: [AuthGuard], component: ProduktaiComponent},
  {path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)},
  {path: 'katalogas', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
