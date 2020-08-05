import { NavItemGroup } from 'projects/ui/src/lib/nav-list/models/nav-item.model';

export const showcaseFormsNavItems: NavItemGroup[] = [
  {
    label: 'Lab900 - Forms',
    items: [
      {
        label: 'Components',
        children: [
          {
            label: 'Form container',
            // route: 'forms/form-container',
          },
        ],
      },
      {
        label: 'Form Fields',
        children: [
          {
            label: 'Input & Textarea',
            route: 'forms/form-field-input',
          },
          {
            label: 'Radio Buttons',
            route: 'forms/form-field-radio-buttons',
          },
          {
            label: 'Checkboxes',
            // route: 'forms/form-field-checkboxes',
          },
          {
            label: 'Select',
            // route: 'forms/form-field-select',
          },
          {
            label: 'Repeater',
            route: 'forms/form-field-repeater',
          },
          {
            label: 'Datepicker',
            // route: 'forms/form-field-datepicker',
          },
          {
            label: 'File upload',
            // route: 'forms/form-field-file-upload',
          },
          {
            label: 'Wysiwyg editor',
            // route: 'forms/form-field-wysiwyg',
          },
        ],
      },
    ],
  },
];
