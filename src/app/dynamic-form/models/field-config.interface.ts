import { ValidatorFn } from '@angular/forms';
import { inputType } from '../models/inputTypes.enum';
import { ButtonTypes } from './ButtonTypes';

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  name: string;
  options?: any[];
  placeholder?: string;
  controlType: string;
  validation?: ValidatorFn[];
  value?: any;
  type?: inputType;
  min?: number;
  max?: number;
  step?: number;
  autofocus?: boolean;
  buttonClass?: string;
  buttonType?: ButtonTypes;
  inline?: boolean;
  style?: any;
  inputStyle?: any;
  icon?: string;
  helpertext?: string;
  clrToggle?: boolean;
}
