import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';


interface Mutual_Funds {
  value: string;
  viewValue: string;
}
interface SIP {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mf',
  templateUrl: './mf.component.html',
  styleUrls: ['./mf.component.css']
})
export class MfComponent implements OnInit {

  someValue = 0;
  public form : {[id:string]: FormGroup; } = {};

  mf: Mutual_Funds[] = [
    {value: 'HDFC_TOP_100', viewValue: 'HDFC TOP 100'},
    {value: 'IDFC_EQITY', viewValue: 'IDFC'},
    {value: 'RELIANCE', viewValue: 'RELIANCE'}
  ];
   sip: SIP[] = [
    {value: 'SIP1', viewValue: '1000'},
    {value: 'SIP2', viewValue: '2000'},
    {value: 'SIP3', viewValue: '3000'},
    {value: 'SIP4', viewValue: '4000'},
    {value: 'SIP5', viewValue: '5000'},
    {value: 'SIP6', viewValue: '6000'},
    {value: 'SIP7', viewValue: '7000'}
  ];
   formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }


  constructor(private formBuilder: FormBuilder)
  {
    //alert("constructor")
   }


  MFonSubmit()
  {
    alert("MF");
    //console.log("output")
    alert(this.form['MfForm'].value.NAME);
    alert(this.form['MfForm'].value.XIRR);
    alert(this.form['MfForm'].value.MF);
    alert(this.form['MfForm'].value.STARTDATE);
  }

  ngOnInit(): void
  {
   this.form["MfForm"] = this.formBuilder.group({
    NAME:new FormControl(),
    AGE:new FormControl(),
    EMAIL:new FormControl(),
    MF:new FormControl(),
    SIP:new FormControl(),
    STARTDATE:new FormControl(),
    ENDDATE: new FormControl(),
    XIRR: new FormControl(),
    FINAL: new FormControl()
  });


  }

}
