import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {
friends;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {
    var user = localStorage.getItem('userdetails');
        user=JSON.parse(user);
      this.authService.myfriends(user).subscribe(data=>{
        this.friends=data.msg;
        console.log(this.friends);
      });
  }

  ngOnInit() {
  }

}
