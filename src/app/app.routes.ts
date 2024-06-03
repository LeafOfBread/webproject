import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ScoreBoardComponent } from './score-board/score-board.component';

export const routes: Routes = [
    { path: 'login' , component: LoginComponent},
    { path: 'sign-up', component: SignUpComponent},
    { path: 'score-board', component: ScoreBoardComponent}
];