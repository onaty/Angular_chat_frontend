import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { GroupchatsocketService } from '../../services/groupchatsocket.service';
@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {
  friendname;
  user: String;
  room: String;
  messageText: String;
  join;
  leave;
  socket;
  messagesender;
  roomid: String;
  sendMessage;
  msgCount: number = 0;
  temp:string ='u';

  messageArray: Array<{ msgFrom: String, msg: String, date: String }> = [];
  databasemessageArray ;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private chatservice: GroupchatsocketService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.friendname = params.name;
    });

    var user = localStorage.getItem('userdetails');
    user = JSON.parse(user);
    this.user=user;
    //  this.user=user.substring(1,user.length-1);
    var currentRoom = user + '-' + this.friendname;
    var reverseRoom = this.friendname + '-' + user;

    this.chatservice.createRoom({ name1: currentRoom, name2: reverseRoom });

    this.chatservice.roomname()
      .subscribe(data => {
        this.roomid = data;

        this.chatservice.emitdatabase({ room: this.roomid, username: user, msgCount: this.msgCount });

        this.chatservice.storedmessages()
          .subscribe(data => {
            this.databasemessageArray=data.result;


          });

      });

    this.chatservice.messagereceiver()
      .subscribe(data => {
        this.messageArray.push(data);
      });


  }

  ngOnInit() {


    this.messagesender = function() {
      this.chatservice.messagesender({ msg: this.messageText, msgTo: this.friendname, date: Date.now(), room: this.roomid });
    }


  }

}
