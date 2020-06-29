import { Component, OnInit } from '@angular/core';
import { Data } from '../data.model';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private httpSvc: HttpClient, private router: Router, private _snackBar: MatSnackBar) { }
  form = new FormGroup({
    title: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    paragraf: new FormControl("", [
      Validators.required
    ])
  })

  inputTitle: any;
  inputParagraf: any;
  ngOnInit(): void {
  }

  createData() {
    let data = new Data();
    data.title = this.inputTitle;
    data.paragraf = this.inputParagraf;    
    this.httpSvc.post("api", data).subscribe(res => {
    })
    this.router.navigate(["/"])
    this._snackBar.open("Saqlandi","ok", {
      duration: 2000,
    });

  }
  get title(){
    return this.form.get("title");
  }
  get paragraf(){
    return this.form.get("paragraf");
  }



}
