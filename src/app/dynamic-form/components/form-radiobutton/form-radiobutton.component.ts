import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-radiobutton',
  styleUrls: ['form-radiobutton.component.scss'],
  templateUrl: 'form-radiobutton.component.html'
})
export class FormRadioButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
