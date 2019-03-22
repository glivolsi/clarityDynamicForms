import { Component, EventEmitter, Input, OnChanges, OnInit, Output, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { FieldConfig } from '../../models/field-config.interface';
import { ButtonService } from '../../components/form-button/button.service';
import { Subscription } from 'rxjs';

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  styleUrls: ['dynamic-form.component.scss'],
  template: `
    <form clrForm [formGroup]="form" (submit)="handleSubmit($event)" [class]="formClass">
      <ng-container *ngFor="let field of config" dynamicField [config]="field" [group]="form"> </ng-container>
    </form>
  `
})
export class DynamicFormComponent implements OnChanges, OnInit, OnDestroy {
  @Input()
  config: FieldConfig[] = [];

  @Input()
  formClass: string = '';

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  buttonClick: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  buttonSubscription: Subscription;

  get controls() {
    return this.config.filter(({ controlType }) => controlType !== 'button');
  }

  get changes() {
    return this.form.valueChanges;
  }

  get valid() {
    return this.form.valid;
  }

  get value() {
    return this.form.value;
  }

  constructor(private fb: FormBuilder, buttonService: ButtonService) {
    this.buttonSubscription = buttonService.buttonClick$.subscribe(data => {
      this.buttonClick.emit(data);
    });
  }

  ngOnInit() {
    this.form = this.createGroup();
  }

  ngOnDestroy(): void {
    this.buttonSubscription.unsubscribe();
  }

  ngOnChanges() {
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls.map(item => item.name);

      controls.filter(control => !configControls.includes(control)).forEach(control => this.form.removeControl(control));

      configControls
        .filter(control => !controls.includes(control))
        .forEach(name => {
          const config = this.config.find(control => control.name === name);
          this.form.addControl(name, this.createControl(config));
        });
    }
  }

  createGroup() {
    const group = this.fb.group({});
    this.controls.forEach(control => {
      if (control.controlType !== 'checkbox' && control.controlType !== 'toggle') {
        group.addControl(control.name, this.createControl(control));
      } else {
        control.options.forEach(element => {
          let formControl: FormControl = this.createControl(control);
          formControl.setValue(element.value);
          group.addControl(element.name, formControl);
        });
      }
    });
    return group;
  }

  createControl(config: FieldConfig) {
    console.log(config);
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    for (let f of this.config) {
      if (this.value[f.name] === undefined) delete this.value[f.name];
    }
    this.submit.emit(this.value);
  }

  setDisabled(name: string, disable: boolean) {
    setTimeout(() => {
      if (this.form.controls[name]) {
        const method = disable ? 'disable' : 'enable';
        this.form.controls[name][method]();
        return;
      }

      this.config = this.config.map(item => {
        if (item.name === name) {
          item.disabled = disable;
        }
        return item;
      });
    }, 0);
  }

  setValue(name: string, value: any) {
    setTimeout(() => {
      this.form.controls[name].setValue(value, { emitEvent: true });
    }, 0);
  }
}
