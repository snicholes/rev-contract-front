import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { ScoresComponent } from './components/scores/scores.component';
import { SubmitScoresComponent } from './components/submit-scores/submit-scores.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path:'login',
    component:LoginRegisterComponent
  },
  {
    path:'submit',
    component:SubmitScoresComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path:'scores',
    component:ScoresComponent,
    canActivate:[ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
