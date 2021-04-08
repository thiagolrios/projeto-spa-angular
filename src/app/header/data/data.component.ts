import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'spa-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})


export class DataComponent implements OnInit {

  
  constructor() { 
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US');
  }

  ngOnInit(): void {
  }

  today= new Date();
  jstoday = '';


}

