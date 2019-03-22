import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-label',
  styleUrls: ['form-label.component.scss'],
  template: `
    <label>{{ config.label }}</label>
  `
})
export class FormLabelComponent {
  config: FieldConfig;
  group: FormGroup;
}
