import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormRadioButtonComponent } from './components/form-radiobutton/form-radiobutton.component';
import { FormCheckBoxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormLabelComponent } from './components/form-label/form-label.component';
import { ButtonService } from './components/form-button/button.service';
import { FormToggleComponent } from './components/form-toggle/form-toggle.component';
import { FormDatepickerComponent } from './components/form-datepicker/form-datepicker.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ClarityModule],
  providers: [ButtonService],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormRadioButtonComponent,
    FormCheckBoxComponent,
    FormLabelComponent,
    FormToggleComponent,
    FormDatepickerComponent
  ],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormRadioButtonComponent,
    FormCheckBoxComponent,
    FormLabelComponent,
    FormToggleComponent,
    FormDatepickerComponent
  ]
})
export class DynamicFormModule {}
