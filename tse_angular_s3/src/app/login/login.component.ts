import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
// 引入注入
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userId: string = '';
  pwd: string = '';
  pwd_check: string='';


  constructor(private logger: LoggerService, ) { }// 检查构建函数

  ngOnInit(): void {
  }


  validate(): void {


    let data = this.logger.getData();
    console.log(data);


    var rxjsData=this.logger.getRxjsData();
    rxjsData.subscribe((data) => {

      console.log(data);
    })
    
    //调用
    this.logger.log("Login : " + this.userId);

    this.logger.log('PassWord : ' + this.pwd);

    this.logger.log('PassWord Confirm : ' + this.pwd_check);

    if (this.pwd == this.pwd_check) {
      alert('Login successfully')
    } else {
      alert('Login failed')
    }
  }
  
  

}
