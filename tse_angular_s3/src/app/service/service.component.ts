import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';
import { Config } from '../config';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  config: Observable<Config> | undefined;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.showConfig();
  }

  showConfig(){
    
    this.config = this.configService.config;

    this.configService.loadConfig();
    
    // alert('ok!');
  }


}
