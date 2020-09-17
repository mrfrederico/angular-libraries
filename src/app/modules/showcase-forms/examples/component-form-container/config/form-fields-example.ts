import { Form } from '../../../../../../../projects/forms/src/lib/models/Form';
import { EditType } from '../../../../../../../projects/forms/src/lib/models/editType';

export const formFieldsExample: Form = {
  fields: [
    {
      attribute: '',
      title: 'Personal Information',
      editType: EditType.Row,
      nestedFields: [
        {
          attribute: 'firstName',
          title: 'Firstname',
          editType: EditType.Input,
          options: {
            colspan: 6,
            required: true,
          },
        },
        {
          attribute: 'lastName',
          title: 'Lastname',
          editType: EditType.Input,
          options: {
            colspan: 6,
            required: true,
          },
        },
        {
          attribute: 'birthday',
          title: 'Birthday',
          editType: EditType.Date,
          options: {
            colspan: 5,
            required: true,
          },
        },
        {
          attribute: 'nationality',
          title: 'Nationality',
          editType: EditType.Input,
          options: {
            colspan: 5,
          },
        },
        {
          attribute: 'nationalInsuranceNumber',
          title: 'National Insurance Number',
          editType: EditType.Input,
          options: {
            colspan: 5,
            pattern: new RegExp('^[0-9]{2}[.\\- ]{0,1}[0-9]{2}[.\\- ]{0,1}[0-9]{2}[.\\- ]{0,1}[0-9]{3}[.\\- ]?[0-9]{2}$'),
            patternTitle: 'national insurance number',
          },
        },
      ],
    },
    {
      attribute: '',
      title: 'Contact Information',
      editType: EditType.Row,
      nestedFields: [
        {
          attribute: 'telMobile',
          title: 'Phone',
          editType: EditType.Input,
          options: {
            type: 'tel',
            colspan: 5,
            pattern: new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$'),
            patternTitle: 'number',
          },
        },
        {
          attribute: 'telHome',
          title: 'Home',
          editType: EditType.Input,
          options: {
            type: 'tel',
            colspan: 5,
            pattern: new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$'),
            patternTitle: 'number',
          },
        },
        {
          attribute: 'email',
          title: 'Email',
          editType: EditType.Input,
          options: {
            colspan: 5,
            type: 'email',
            pattern: new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
            patternTitle: 'email',
          },
        },
      ],
    },
    {
      attribute: '',
      title: 'Phone registration',
      editType: EditType.Row,
      nestedFields: [
        {
          attribute: 'registration',
          editType: EditType.Repeater,
          options: { removeAll: true },
          nestedFields: [
            {
              attribute: 'value',
              editType: EditType.Input,
              options: { readOnly: true, defaultValue: () => getFormattedDate(new Date(Date.now())) },
            },
          ],
        },
      ],
    },
    {
      attribute: '',
      title: 'Comment',
      editType: EditType.Row,
      nestedFields: [
        {
          attribute: 'comments',
          editType: EditType.TextArea,
        },
      ],
    },
  ],
};

const getFormattedDate = (date: Date): string => {
  return `${digits(date.getDate())}/${digits(date.getMonth())}/${date.getFullYear()} - ${digits(date.getHours())}:${digits(
    date.getMinutes(),
  )}:${digits(date.getSeconds())}`;
};

const digits = (value: number): string => {
  return value > 10 ? `${value}` : `0${value}`;
};