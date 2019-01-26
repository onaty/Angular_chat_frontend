import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RatingModule } from 'ngx-bootstrap';

//services
import { GroupchatsocketService } from './services/Groupchatsocket.service';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

//guards
import { AuthGuard } from './guards/auth.guard';

//components
import { GrouptestComponent } from './components/grouptest/grouptest.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddfriendComponent } from './components/addfriend/addfriend.component';
import { FriendlistComponent } from './components/friendlist/friendlist.component';
import { ChatpageComponent } from './components/chatpage/chatpage.component';
import { Chatpage1Component } from './components/chatpage1/chatpage1.component';
import { FriendprofileComponent } from './components/friendprofile/friendprofile.component';
import { Navbar1Component } from './house/navbar1/navbar1.component';
import { Footer1Component } from './house/footer1/footer1.component';
import { Section1Component } from './house/section1/section1.component';

import { SectionsComponent } from './house/sections/sections.component';
import { Home2Component } from './house/home2/home2.component';
import { UserprofileComponent } from './house/userprofile/userprofile.component';
import { WorkerprofileComponent } from './house/workerprofile/workerprofile.component';
import { UserorderpageComponent } from './house/userorderpage/userorderpage.component';
import { WorkerviewrequestpageComponent } from './house/workerviewrequestpage/workerviewrequestpage.component';
import { CartComponent } from './house/cart/cart.component';
import { SearchpageComponent } from './house/searchpage/searchpage.component';

const appRoutes: Routes = [
  {
    path: '',
    component: GrouptestComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component:  RegisterComponent
  },
  {
    path: 'home',
    component:  HomeComponent, canActivate:[AuthGuard]
  },
  {
    path: 'profile',
    component:   ProfileComponent, canActivate:[AuthGuard]
  },
  {
    path: 'users',
    component:   AddfriendComponent, canActivate:[AuthGuard]
  },
  {
    path: 'friendslist',
    component:   FriendlistComponent
    , canActivate:[AuthGuard]
  },
  {
    path: 'profilepage/:name',
    component:   ChatpageComponent
  },
  {
    path: 'chat/:name',
    component:  ChatpageComponent, canActivate:[AuthGuard]
  },

//   {
//    path: '',
//    component: Home2Component
//  },
//  {
//   path: 'section',
//   component: SectionsComponent
// },
// {
//  path: 'single',
//  component:Section1Component
// },
]

@NgModule({
  declarations: [
    AppComponent,
    GrouptestComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    AddfriendComponent,
    FriendlistComponent,
    ChatpageComponent,
    Chatpage1Component,
    FriendprofileComponent,
    Navbar1Component,
    Footer1Component,
    Section1Component,
    SectionsComponent,
    Home2Component,
    UserprofileComponent,
    WorkerprofileComponent,
    UserorderpageComponent,
    WorkerviewrequestpageComponent,
    CartComponent,
    SearchpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
    NgbModule.forRoot(),
      BsDropdownModule.forRoot(),
      RatingModule.forRoot()
  ],
  providers: [GroupchatsocketService, ValidateService, AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
