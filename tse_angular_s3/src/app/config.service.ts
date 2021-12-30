import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

    configUrl = 'assets/config.json';
    config = new BehaviorSubject<Config>({

        api_url: '',
        text_file: '',
        date: ''
    })


    constructor(public http:HttpClient) { }
    loadConfig(){

      this.http.get<Config>(this.configUrl)
        .subscribe(this.config);
    }

  }

