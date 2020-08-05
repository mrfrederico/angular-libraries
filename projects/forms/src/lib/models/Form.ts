import { FormField, FieldOptions } from './FormField';
import { FormGroup } from './FormGroup';

export class Form {
  title?: string;
  columns?: number;
  fields: (FormGroup | FormField)[];
}

export function isFormField(field: FormGroup | FormField): field is FormField {
  return (field as FormField).editType !== undefined;
}

export function isFormGroup(field: FormGroup | FormField): field is FormGroup {
  return (field as FormGroup).fields !== undefined;
}
