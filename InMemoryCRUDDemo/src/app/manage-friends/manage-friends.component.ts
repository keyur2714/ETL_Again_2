import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-friends',
  templateUrl: './manage-friends.component.html',
  styleUrls: ['./manage-friends.component.css']
})
export class ManageFriendsComponent implements OnInit {


  message : string = '';
  friendName : string = 'Radhe';  
  isUpdate : boolean = false;
  updateIdx : number = -1;
  friendsNames : string[] = ["keyur","denish","vinit"];

  constructor() { }

  ngOnInit() {
  }

  addFriend() : void {
    //alert(name);  
    let name = this.friendName;
    
    if(this.friendsNames.indexOf(name) === -1){
      this.friendsNames.push(name);
      this.message = '';
    }else{
      //alert(name+" Already Exists.");
      this.message = name+" Already Exists.";
    }
    
  }

  updateFriend() : void {
    //alert(name);  
    let name = this.friendName;
    if(this.friendsNames.indexOf(name) === -1){
      this.friendsNames[this.updateIdx] = name;
      this.message = '';
    }else{
      //alert(name+" Already Exists.");
      this.message = name+" Already Exists.";
    }
  }

  edit(idx : number) : void{
    //alert(idx);
    this.isUpdate = true;
    this.updateIdx = idx;
    this.friendName = this.friendsNames[idx];
  }

  delete(idx : number) : void {
    //alert(idx);
    let confirmMsg = confirm("Are you sure want to delete?");
    //alert(confirmMsg);
    if(confirmMsg){
      this.friendsNames.splice(idx,1);
      this.message = 'Friend Deleted Successfully.';
    }
  }
}
