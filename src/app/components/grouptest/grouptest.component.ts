import { Component, OnInit } from '@angular/core';
import { GroupchatsocketService } from '../../services/Groupchatsocket.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-grouptest',
  templateUrl: './grouptest.component.html',
  styleUrls: ['./grouptest.component.css']
})
export class GrouptestComponent implements OnInit {
  user:String;
   room:String;
   messageText:String;
   join;
   leave;
   socket;

   sendMessage;
   messageArray:Array<{user:String,message:String}> = [];

      // messageArray:Array<{user:String,message:String}> = [];
  constructor(private chatservice:GroupchatsocketService, private router:Router) {
    this.chatservice.newUserJoined()
       .subscribe(data=> this.messageArray.push(data));


        this.chatservice.userLeftRoom()
        .subscribe(data=>this.messageArray.push(data));

        this.chatservice.newMessageReceived()
        .subscribe(data=>this.messageArray.push(data));


}

  ngOnInit() {
    this.join=function (){
      console.log(this.user);


        this.chatservice.joinRoom({user:this.user, room:this.room});
    }

  this.leave=function (){
         this.chatservice.leaveRoom({user:this.user, room:this.room});
     }

     this.sendMessage=function (){
         console.log(this.messageText);
      this.chatservice.sendMessage({user:this.user, room:this.room, message:this.messageText});
  }


  }


}
