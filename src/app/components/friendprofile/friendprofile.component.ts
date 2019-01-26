import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-friendprofile',
  templateUrl: './friendprofile.component.html',
  styleUrls: ['./friendprofile.component.css']
})
export class FriendprofileComponent implements OnInit {
friendname;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private authService:AuthService
  ) {
    this.route.params.subscribe((params:Params)=>{
        this.friendname=params.name;
      });

  }

  ngOnInit() {
  }

}
