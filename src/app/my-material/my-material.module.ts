import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';

const listOfModules = [MatSliderModule, MatCheckboxModule];

@NgModule({
  declarations: [],
    imports: listOfModules,
    exports: listOfModules
})

export class MyMaterialModule { }
