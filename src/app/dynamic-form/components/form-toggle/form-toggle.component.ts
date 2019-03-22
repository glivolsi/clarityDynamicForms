import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-toggle',
  templateUrl: 'form-checkbox.component.html'
})
export class FormToggleComponent {
  config: FieldConfig;
  group: FormGroup;
}
