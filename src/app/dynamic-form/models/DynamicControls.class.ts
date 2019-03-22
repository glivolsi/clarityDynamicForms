import { ButtonTypes } from './ButtonTypes';
import { ValidatorFn } from '@angular/forms';
import { inputType } from './inputTypes.enum';

///////////////// INPUT////////////////////////////////////////////////
export interface InputOptions {
  type?: inputType;
  placeholder?: string;
  value?: string;
  validation?: ValidatorFn[];
  disabled?: boolean;
  label?: string;
  inline?: boolean;
  autofocus?: boolean;
  style?: any;
  helpertext?: string;
}

export class DynamicFormInput {
  name: string;
  controlType: string;
  type: inputType;
  value?: string;
  validation?: ValidatorFn[];
  placeholder?: string;
  autofocus?: boolean;
  disabled?: boolean;
  label?: string;
  inline?: boolean;
  style?: any;
  helpertext?: string;

  constructor(name: string, options: InputOptions) {
    this.name = name;
    this.controlType = 'input';
    this.type = options.type || inputType.text;
    this.placeholder = options.placeholder || '';
    this.autofocus = options.autofocus || false;
    this.value = options.value || null;
    this.validation = options.validation || [];
    this.disabled = options.disabled || false;
    this.helpertext = options.helpertext || null;
    this.label = options.label || '';
    this.style = options.style || {};
    this.style = options.inline ? { ...this.style, display: 'inline' } : this.style;
  }
}

///////////////// RANGE////////////////////////////////////////////////
export interface RangeOptions {
  value?: number;
  validation?: ValidatorFn[];
  autofocus?: boolean;
  disabled?: boolean;
  label?: string;
  inline?: boolean;
  style?: any;
  min?: number;
  max?: number;
  step?: number;
}

export class DynamicFormRange {
  name: string;
  controlType: string;
  type: inputType;
  value: number;
  validation?: ValidatorFn[];
  autofocus?: boolean;
  disabled?: boolean;
  label?: string;
  inline?: boolean;
  style?: any;
  min?: number;
  max?: number;
  step?: number;

  constructor(name: string, options: RangeOptions) {
    this.name = name;
    this.controlType = 'input';
    this.type = inputType.range;
    this.autofocus = options.autofocus || false;
    this.value = options.value || null;
    this.validation = options.validation || [];
    this.disabled = options.disabled || false;
    this.min = options.min || 0;
    this.max = options.max || 0;
    this.step = options.step || 0;
    this.label = options.label || '';
    this.style = options.style || {};
    this.style = options.inline ? { ...this.style, display: 'inline' } : this.style;
  }
}

///////////////// BUTTON////////////////////////////////////////////////
export interface ButtonOptions {
  disabled?: boolean;
  label?: string;
  buttonClass?: string;
  buttonType?: ButtonTypes;
  containerStyle?: any;
  inline?: boolean;
  icon?: string;
}

export class DynamicFormButton {
  name: string;
  controlType: string;
  disabled?: boolean;
  label?: string;
  buttonClass?: string;
  buttonType?: ButtonTypes;
  style?: any;
  icon: string;

  constructor(name: string, options: ButtonOptions) {
    this.name = name;
    this.controlType = 'button';
    this.disabled = options.disabled || false;
    this.label = options.label || '';
    this.buttonClass = options.buttonClass || '';
    this.buttonType = options.buttonType || ButtonTypes.button;
    this.style = options.containerStyle || {};
    this.style = options.inline ? { ...this.style, display: 'inline' } : this.style;
    this.icon = options.icon || null;
  }
}

///////////////// RADIOBUTTON////////////////////////////////////////////////
export interface RadioButtonValue {
  label: string;
  value: string;
}

export interface RadiobuttonOptions {
  disabled?: boolean;
  label?: string;
  options: RadioButtonValue[];
  validation?: ValidatorFn[];
  inline?: boolean;
  value?: string;
}

export class DynamicFormRadiobutton {
  name: string;
  controlType: string;
  disabled?: boolean;
  label?: string;
  inline?: boolean;
  options: RadioButtonValue[];
  value: string;
  validation?: ValidatorFn[];

  constructor(name: string, options: RadiobuttonOptions) {
    this.name = name;
    this.controlType = 'radio';
    this.disabled = options.disabled || false;
    this.label = options.label || '';
    this.inline = options.inline || false;
    this.options = options.options || [];
    this.value = options.value || null;
    this.validation = options.validation || [];
  }
}

///////////////// CHECKBOX ////////////////////////////////////////////////
export interface CheckboxValue {
  label: string;
  name: string;
  value: boolean;
}

export interface CheckboxOptions {
  disabled?: boolean;
  label?: string;
  options: CheckboxValue[];
  validation?: ValidatorFn[];
  inline?: boolean;
  value?: string;
  clrToggle?: boolean;
}

export class DynamicFormCheckbox {
  name: string;
  controlType: string;
  disabled?: boolean;
  label?: string;
  inline?: boolean;
  options: CheckboxValue[];
  value: string;
  validation?: ValidatorFn[];
  clrToggle?: boolean;

  constructor(options: CheckboxOptions) {
    this.name = 'dummy';
    this.controlType = 'checkbox';
    this.disabled = options.disabled || false;
    this.label = options.label || '';
    this.inline = options.inline || false;
    this.options = options.options || [];
    this.value = options.value || null;
    this.validation = options.validation || [];
    this.clrToggle = true;
  }
}

///////////////// TOGGLE ////////////////////////////////////////////////

export class DynamicFormToggle {
  name: string;
  controlType: string;
  disabled?: boolean;
  label?: string;
  inline?: boolean;
  options: CheckboxValue[];
  value: string;
  validation?: ValidatorFn[];
  clrToggle?: boolean;

  constructor(options: CheckboxOptions) {
    this.name = 'dummy';
    this.controlType = 'toggle';
    this.disabled = options.disabled || false;
    this.label = options.label || '';
    this.inline = options.inline || false;
    this.options = options.options || [];
    this.value = options.value || null;
    this.validation = options.validation || [];
    this.clrToggle = true;
  }
}

///////////////// SELECT ////////////////////////////////////////////////
export interface SelectOptions {
  disabled?: boolean;
  label?: string;
  value?: string;
  style?: any;
  options: string[];
  validation?: ValidatorFn[];
}

export class DynamicFormSelect {
  name: string;
  controlType: string;
  disabled?: boolean;
  label?: string;
  value?: string;
  style?: any;
  options: string[];
  validation?: ValidatorFn[];

  constructor(name: string, options: SelectOptions) {
    this.name = name;
    this.controlType = 'select';
    this.disabled = options.disabled || false;
    this.label = options.label || '';
    this.style = options.style || {};
    this.options = options.options || [];
    this.value = options.value || null;
    this.validation = options.validation || [];
  }
}
