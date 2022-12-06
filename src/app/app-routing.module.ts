import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { SelectedCategoryComponent } from './components/selected-category/selected-category.component';
import { SecurityGuard } from './guards/security.guard';

const routes: Routes = [
  {'path':'',component:HomeComponent },
  {'path':'favorite',component:FavoriteComponent,canActivate:[SecurityGuard]},
  {'path':'category',component:CategoryComponent},
  {'path':'selectedcategory',component:SelectedCategoryComponent},
  {'path':'login',component:LoginComponent},
  {'path':'register',component:RegisterComponent},
  {'path':'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
