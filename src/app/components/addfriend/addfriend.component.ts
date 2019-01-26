import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent implements OnInit {
  users;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {
    this.authService.getallusers().subscribe(usersinfo => {
      this.users = usersinfo.usersinfo;
    },
      err => {
        console.log(err);
        return false;
      });

  }

  ngOnInit() {
  }

  onaddfriend(friends_username) {
    var user = localStorage.getItem('userdetails')
        user=JSON.parse(user);
    var addfriend = {
      username: user,
      friendsname: friends_username
    }

    console.log(friends_username);

    console.log(addfriend);
    this.authService.addnewfriend(addfriend).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        // this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        // this.router.navigate(['/register']);
      }
    });

  }

}
