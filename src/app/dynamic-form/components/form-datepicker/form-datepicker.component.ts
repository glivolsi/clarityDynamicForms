import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  styleUrls: ['form-datepicker.component.scss'],
  templateUrl: 'form-datepicker.component.html'
})
export class FormDatepickerComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
