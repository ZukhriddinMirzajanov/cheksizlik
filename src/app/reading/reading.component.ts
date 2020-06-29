import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {

  titleFromDb: "";
  paragrafFromDb: "";

  employees;
  constructor(private httpSvc: HttpClient, private router: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get("_id");
    
    this.httpSvc.get("api")
    .subscribe(response =>{
      this.employees = response;
      for(let result of this.employees){
        if(result._id == id){
          this.titleFromDb = result.title
          this.paragrafFromDb =result.paragraf
        }
               
      }
     
    })
    
  }

}
