import { Component, ViewChild } from '@angular/core';
import { EditType, Form, FormContainerComponent } from '@lab900/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';

function validateResources(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const resourceUnits: { default: boolean }[] = control?.value || [];
    if (resourceUnits?.length > 1) {
      const defaults = resourceUnits.filter((ru) => ru.default === true);
      if (!defaults.length) {
        return { noDefault: true };
      }
      if (defaults.length > 1) {
        return { toManyDefaults: defaults.length };
      }
    }
    return null;
  };
}

@Component({
  selector: 'lab900-form-field-repeater-example',
  template: '<lab900-form-container [schema]="formSchema" (click)="logValue(form)" #form></lab900-form-container>',
})
export class FormFieldRepeaterExampleComponent {
  @ViewChild(FormContainerComponent, { static: true })
  public form: FormContainerComponent<any>;

  public formSchema: Form = {
    fields: [
      {
        attribute: 'repeater',
        title: 'Add something',
        editType: EditType.Repeater,
        validators: [validateResources()],
        nestedFields: [
          {
            editType: EditType.Row,
            options: {
              mobileCols: true,
            },
            nestedFields: [
              {
                attribute: 'value',
                editType: EditType.Input,
                title: 'Repeated field',
                options: {
                  defaultValue: '234',
                  colspan: 6,
                },
              },
              {
                attribute: 'default',
                editType: EditType.Checkbox,
                title: 'default',
                options: {
                  defaultValue: false,
                  colspan: 6,
                },
              },
            ],
          },
        ],
      },
    ],
  };

  logValue(form: any) {
    console.log(form);
  }
}
