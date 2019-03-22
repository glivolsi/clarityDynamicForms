import { Component, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

import { EventEmitter } from 'events';
import { ButtonService } from './button.service';

@Component({
  selector: 'form-button',
  styleUrls: ['form-button.component.scss'],
  templateUrl: 'form-button.component.html'
})
export class FormButtonComponent implements Field {
  @Output() handleButton: EventEmitter = new EventEmitter();
  config: FieldConfig;
  group: FormGroup;
  constructor(private buttonService: ButtonService) {}
  handleButtonClick() {
    this.buttonService.buttonClick(this.config.name);
  }
}
