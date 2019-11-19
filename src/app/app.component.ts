import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'material2';
    public myDatepicker: any;

    public isChecked: boolean=false;

    @ViewChild("myCheckbox", { static: false }) val;

    constructor() {
       
    }


    onChkChange() {
        console.log("avant : "+this.isChecked); 
        this.isChecked = !this.isChecked;
        console.log("apres : " + this.isChecked);
        console.log("et la valeur native : " + this.val.checked);
    }
       
}
