import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  parametro:any;
  constructor(private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe(res=>{
      console.log(res['parametro'])
      this.parametro = res['parametro']      
    })
  }
  
}
