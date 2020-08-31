import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
@Component({
  selector: 'app-ppf',
  templateUrl: './ppf.component.html',
  styleUrls: ['./ppf.component.css']
})
export class PpfComponent implements OnInit {

   ppfForm = new FormGroup({
    Amount: new FormControl(''),
    Years: new FormControl(''),
  });


  constructor() { }

  ngOnInit(): void {
  }

}
