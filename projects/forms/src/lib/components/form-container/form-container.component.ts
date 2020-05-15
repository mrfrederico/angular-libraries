import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup as NgFormGroup, Validators } from '@angular/forms';
import { defaultValue } from '../../models/editType';
import { Form, isFormField } from '../../models/Form';
import { FormField } from '../../models/FormField';
import { FormGroup } from '../../models/FormGroup';
import { FormSubmit } from '../../models/FormSubmit';

@Component({
  selector: 'lab900-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent<T> implements OnInit {
  @Input() schema: Form;

  @Output() submitForm: EventEmitter<FormSubmit<T>> = new EventEmitter<FormSubmit<T>>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();

  form: NgFormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      this.schema.fields.reduce((formGroupObject, field) => {
        if (isFormField(field)) {
          formGroupObject[field.attribute] = new FormControl(defaultValue(field.editType), [
            field.options?.required ? Validators.required : () => null,
          ]);
        }
        return formGroupObject;
      }, {}),
    );
  }

  isFormField(formField: FormGroup | FormField): boolean {
    return isFormField(formField);
  }

  get success() {
    return false;
  }

  get valid() {
    return this.form.valid;
  }

  cancelSubmit() {
    this.cancel.emit(true);
  }

  submitHandler() {
    if (this.valid) {
      this.submitForm.emit({ type: 'new', data: this.form.value as T });
    }
  }
}