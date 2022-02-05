import { Component, OnInit } from '@angular/core';
import { User} from "../model/user.model"
import UserJson from "../../assets/users.json"

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss']
})
export class UserCenterComponent implements OnInit {

  isOpen: boolean = false;
  userSelected: User | undefined; // instantiate User

  users: User[] = [];
  constructor() {
    this.users = UserJson; // get users' information from json file.
   }

  ngOnInit(): void {
  }

  // get user that was selected and open dialog
  openDialog(user : User){
    this.userSelected = user;
    this.isOpen = true;
  }
}
