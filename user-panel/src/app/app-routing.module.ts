import { AuthGuardGuard } from './auth-guard.guard';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
  {
    path: '', 
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path: 'SignIn', 
    component: SignInComponent
  },
  {
    path: 'SignUp',
    component: SignUpComponent
  },

  {
    path: 'Home',
    component: WelcomeComponent
  },

  {
    path:'Profile',
    component: ProfileComponent,
    canActivate: [AuthGuardGuard]
  },

  {
    path:'EditProfile',
    component:EditComponent,
    canActivate:[AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
