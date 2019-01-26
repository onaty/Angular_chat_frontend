import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { GroupchatsocketService } from '../../services/groupchatsocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private chatservice: GroupchatsocketService
  ) { }
  username: String;
  password: String;
  ngOnInit() {
  }

  onLoginSubmit() {

    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {

      if (data.success) {
        this.authService.storeUserData(data.token, data.user);

        this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['home']);
        this.chatservice.loggedin( this.username);

      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['login']);
      }
    });
  }

}
