import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { RubricComponent } from './components/rubric/rubric.component';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { UrlService } from './services/url.service';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { SortRubricPipe } from './pipes/sort-rubric.pipe';
import { FilterRubricPipe } from './pipes/filter-themes.pipe';
import { RubricBoxComponent } from './components/rubric-box/rubric-box.component';
import { SubmitScoresComponent } from './components/submit-scores/submit-scores.component';
import { ScoresComponent } from './components/scores/scores.component';
import { ScoreService } from './services/score.service';
import { RubricService } from './services/rubric.service';
import { IndivScoresComponent } from './components/indiv-scores/indiv-scores.component';
import { ScoreSummaryComponent } from './components/score-summary/score-summary.component';
import { ScoreComponent } from './components/score/score.component';
import { FilterScoresPipe } from './pipes/filter-scores.pipe';
import { ScoreColorDirective } from './directives/score-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RubricComponent,
    LoginRegisterComponent,
    SortRubricPipe,
    FilterRubricPipe,
    RubricBoxComponent,
    SubmitScoresComponent,
    ScoresComponent,
    IndivScoresComponent,
    ScoreSummaryComponent,
    ScoreComponent,
    FilterScoresPipe,
    ScoreColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    UrlService,
    ScoreService,
    RubricService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
