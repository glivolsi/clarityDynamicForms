import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-checkbox',
  styleUrls: ['form-checkbox.component.scss'],
  templateUrl: 'form-checkbox.component.html'
})
export class FormCheckBoxComponent {
  config: FieldConfig;
  group: FormGroup;
}
