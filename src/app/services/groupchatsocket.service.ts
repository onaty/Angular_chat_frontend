import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupchatsocketService {
  socket = io('http://localhost:8080/');
  // roomname;
  constructor() {
    var user1 = localStorage.getItem('userdetails');
    user1 = JSON.parse(user1);

    this.socket.emit('loggedin', user1);
    this.socket.on('disconnect', function() {

    });//end of connect event.




  }



  joinRoom = function(data) {
    console.log(data);
    this.socket.emit('join', data);
  }
  createRoom = function(data) {
    // event to set room and join.
    this.socket.emit('set-room', data);
    console.log('creating a room ');
  }

  emitdatabase = function(data) {
    this.socket.emit('old-chats-init', data);
    console.log(data);
  }

  loggedin = function(data) {
    console.log(data);
    this.socket.emit('loggedin', data);
  }

  roomname() {
    let observable = new Observable<String>(observer => {
      this.socket.on('room name', (data) => {
        observer.next(data);

      });
      return () => { this.socket.disconnect(); }
    });


    return observable;
  }

  newUserJoined() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('new user joined', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); }
    });

    return observable;
  }


  storedmessages() {
    let observable = new Observable<{
      result: [{
        _id: String
        msgFrom: String,
        msgTo: String,
        msg: String,
        room: String,
        createdOn: String
      }], room: String
    }>(observer => {
      this.socket.on('old-chats', (data) => {
        observer.next(data);
        console.log('-------llllll---');
      });
      return () => { this.socket.disconnect(); }
    });


    return observable;
  }

  leaveRoom(data) {
    this.socket.emit('leave', data);
    console.log("a new new user left");
  }

  userLeftRoom() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('left room', (data) => {
        observer.next(data);
        console.log("a user left");
      });
      return () => { this.socket.disconnect(); }
    });

    console.log(observable);
    return observable;
  }

  sendMessage(data) {
    this.socket.emit('message', data);
  }


  messagesender(data) {
    this.socket.emit('chat-msg', data);
  }

  newMessageReceived() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('new message', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); }
    });

    return observable;
  }

  //receiving messages.
  messagereceiver() {
    let observable = new Observable<{ msgFrom: String, msg: String, date: String }>(observer => {
      this.socket.on('chat-msgs', (data) => {
        observer.next(data);
        console.log(data);
      });
      return () => { this.socket.disconnect(); }
    });
    console.log('yooooooooj');
    return observable;

  }










}
