import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css']
})
export class DatasComponent implements OnInit {

  employees: any[];
  titles;
 

  constructor(private httpSvc: HttpClient, private router: Router) { }
  searchData;

  ngOnInit(): void {
    this.httpSvc.get("api")
    .subscribe(response =>{
     this.titles = response;
    })

     
  }

  onSelect(title){
    this.router.navigate(["malumotlar", title._id])
  }
  
 

}
