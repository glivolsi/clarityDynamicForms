import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { FieldConfig } from './dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';
import { inputType } from './dynamic-form/models/inputTypes.enum';
import { ButtonTypes } from './dynamic-form/models/ButtonTypes';
import {
  DynamicFormButton,
  DynamicFormSelect,
  DynamicFormRadiobutton,
  DynamicFormCheckbox,
  DynamicFormInput,
  DynamicFormRange,
  DynamicFormToggle,
  DynamicFormDatepicker
} from './dynamic-form/models/DynamicControls.class';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config: FieldConfig[] = [
    new DynamicFormInput('name', {
      label: 'Full Name',
      autofocus: true,
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)],
      value: 'John Smith',

      inline: true,
      style: { width: '250px' },
      helpertext: 'Please insert your full name'
    }),
    new DynamicFormInput('alias', {
      label: 'Alias',
      placeholder: 'Enter alias',
      validation: [Validators.minLength(3)],
      inline: true
    }),
    new DynamicFormDatepicker('birthdate', {
      label: 'Date of Birth',
      placeholder: 'Enter your Birth Date',
      validation: [Validators.required],
      inline: true,
      helpertext: 'Please insert your birth date'
    }),
    new DynamicFormInput('password', {
      label: 'Password',
      placeholder: 'Enter your password',
      validation: [Validators.required, Validators.minLength(4)],
      type: inputType.password
    }),

    new DynamicFormRange('age', {
      label: 'Age',
      validation: [Validators.required],
      value: 18,
      min: 14,
      max: 120,
      step: 0.5
    }),
    new DynamicFormCheckbox({
      label: 'Sports Interests',
      inline: true,
      validation: [Validators.required],
      options: [{ label: 'Soccer', name: 'soccer', value: true }, { label: 'Tennis', name: 'tennis', value: false }, { label: 'Basket', name: 'basket', value: false }]
    }),
    new DynamicFormRadiobutton('gender', {
      options: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }, { label: 'Other', value: 'other' }],
      label: 'Gender',
      //inline: true,
      value: 'female',
      validation: [Validators.required]
    }),

    new DynamicFormToggle({
      label: 'Agree Privacy Terms',
      validation: [CheckboxTrueValidator],
      options: [{ label: '', name: 'privacy', value: false }],
      inline: true,
      clrToggle: true
    }),

    new DynamicFormToggle({
      label: 'I want receive your Newsletter',
      options: [{ label: '', name: 'newsletter', value: false }],
      clrToggle: true
    }),

    new DynamicFormSelect('food', {
      label: 'Favourite Food',
      value: 'Coffee',
      options: ['Pizza', 'Hot Dogs', 'Hamburgers', 'Coffee'],
      validation: [Validators.required],
      style: { width: '200px' }
    }),
    new DynamicFormButton('submit', { label: 'Submit', inline: true, disabled: true, buttonType: ButtonTypes.submit, buttonClass: 'btn btn-primary btn-sm', icon: 'pencil' }),
    new DynamicFormButton('reset', { label: 'reset', buttonType: ButtonTypes.reset, inline: true, buttonClass: 'btn btn-success btn-sm' }),
    new DynamicFormButton('updatename', { label: 'Update Name', inline: false, buttonClass: 'btn btn-danger btn-sm' }),
    new DynamicFormButton('button1', { label: 'click Me', inline: true, buttonClass: 'btn btn-link' }),
    new DynamicFormButton('button2', { label: 'click Me 2', inline: true, buttonClass: 'btn btn-link' })
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });
    this.form.setDisabled('submit', true);
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }

  buttonClick(button: string) {
    switch (button) {
      case 'updatename':
        this.form.setValue('name', 'Gianni Livolsi');
        break;
      default:
        console.log('you have pressed the button with name: ' + button);
    }
  }
}

export function CheckboxTrueValidator(control: AbstractControl) {
  if (control.value !== true) return { checked: false };
  return null;
}
