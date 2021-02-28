import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-string-demos',
  templateUrl: './string-demos.component.html',
  styleUrls: ['./string-demos.component.css']
})
export class StringDemosComponent implements OnInit {

  constructor() { }
  @ViewChild('myForm') myTestForm: NgForm;
  active = '';
  strMessage = ("Select Method");
  LformGroup: FormGroup;
  formArray: FormArray;
  FirstName: string = '';
  SecondName: string = '';
  ConcatResult: string = '';


  // Records: [{ InputName: string, parameter: any, Returntype: any, OriginalValue: string, Original: string, MethodName: string }] =
  //   [{ InputName: '', parameter: null, Returntype: null, OriginalValue: '', Original: '', MethodName: '' }];

  Records: any = null;

  // Records: [{}] =
  //   [{}];

  stringMethods = [{
    ID: 0, Name: 'charAt'
  }, {
    ID: 1, Name: 'concat'
  }, {
    ID: 2, Name: 'endsWith'
  }, {
    ID: 3, Name: 'include'
  }, {
    ID: 4, Name: 'indexOf'
  }, {
    ID: 5, Name: 'match'
  },

  {
    ID: 6, Name: 'padEnd'
  }, {
    ID: 7, Name: 'padStart'
  }, {
    ID: 8, Name: 'repeat'
  }, {
    ID: 9, Name: 'replace'
  }, {
    ID: 10, Name: 'search'
  }, {
    ID: 11, Name: 'slice'
  }, {
    ID: 12, Name: 'split'
  },
  {
    ID: 13, Name: 'startsWith'
  }, {
    ID: 14, Name: 'subString'
  }, {
    ID: 15, Name: 'toLocalLowerCase'
  }, {
    ID: 16, Name: 'toLocalUpperCase'
  }, {
    ID: 17, Name: 'toLowerCase'
  }, {
    ID: 18, Name: 'toString'
  },
  {
    ID: 19, Name: 'toUpperCase'
  },
  {
    ID: 20, Name: 'trim'
  },
  {
    ID: 21, Name: 'trimEnd'
  },
  {
    ID: 22, Name: 'trimStart'
  }]
  ngOnInit(): void {
    this.LformGroup = new FormGroup({
      'FirstName': new FormControl(null),
      'SecondName': new FormControl(null),
      'MethodName': new FormControl(null)
    })
  }

  Clear = (myForm: NgForm) => {
    this.LformGroup.reset();
  }

  formSubmission() {
  }

  onChange(event: Event) {
    // const Value = event.currentTarget['value'];
    // const text = event.target['options'][Value].text;

    // if (Value) {
    //   const tempRecords = this.Records.filter((item) => {
    //     return text.includes(item["MethodName"]);
    //   })
    //   //let temp1 = [];
    //   // tslint:disable-next-line: no-unused-expression
    //   // tslint:disable-next-line: max-line-length
    //   this.Records = tempRecords as [];
    //   console.log(tempRecords)
    // }
  }


  Filter(SelectedValue) {
    // const Value = event.currentTarget['value'];
    // const text = event.target['options'][Value].text;

    //if (Value) {
    this.Records = this.ConstResult.filter((item) => {
      return item["Index"] === parseInt(SelectedValue);
    })
    //let temp1 = [];
    // tslint:disable-next-line: no-unused-expression
    // tslint:disable-next-line: max-line-length
    //this.Records = tempRecords as [{ InputName: string, parameter: any, Returntype: any, OriginalValue: string, Original: string, MethodName: string }];
    // tslint:disable-next-line: align
    //    this.Records = tempRecords;

    console.log(this.Records.length)
  }




  ConstResult = [];

  History(Selectedindex, inputName, parameter, returntype, originalValue, IsMatch) {
    this.ConstResult.push(
      {
        // tslint:disable-next-line: radix
        MethodName: this.stringMethods[parseInt(Selectedindex)].Name,
        InputName: this.LformGroup.controls['FirstName'].value as string,
        parameter: this.LformGroup.controls['SecondName'].value as string,
        Returntype: returntype,
        OriginalValue: originalValue,
        Original: IsMatch,
        Index: parseInt(Selectedindex)
      }
    )
    this.Records = this.ConstResult as [{}];
    //console.log(this.Records);
  }






  Execution(Input: string, Parameter, SelectedIndex?) {

    
    console.log(` Selected Values are First ${Input} 
                  and Another value is ${Parameter} `);


   const result = Input.charAt(1);
   console.log(result);

  


























    const OriginalValue = Input;
    const IsOriginal = Input === OriginalValue ? 'Currect' : 'Not Currect';
    this.History(SelectedIndex, Input, Parameter, result, OriginalValue, IsOriginal);
  }




























}
