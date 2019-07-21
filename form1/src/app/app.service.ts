import { Injectable } from '@angular/core';
import { Input, MultipleChoice, Checkbox } from './modules/form-builder/form-controls/form-controls';
import { FormControlBase } from './modules/form-builder/form-controls/form-control-base';

@Injectable()
export class AppService {

  getQuestions() {
    const questions = [

      new Input(
        {
          controlType: 'input',
          key: 'username',
          label: 'Username',
          value: '',
          type: 'string',
          validators: {
            required: true,
          },
          required: true,
        },
      ),
      new Input(
        {
          controlType: 'input',
          key: 'password',
          value: '',
          label: 'Password',
          type: 'password',
          validators: {
           required: true,
          },
          required: true,
        },
      ),
      new Input(
        {
          controlType: 'input',
          key: 'email',
          value: '',
          label: 'Email',
          type: 'string',
          validators: {
            required: false,
          },
        },
      ),
      new MultipleChoice(
        {
          controlType: 'select',
          key: 'language',
          value: '',
          label: 'Country',
          options: [
            { key: 'bg', value: 'Bulgaria' },
            { key: 'us', value: 'USA' }
          ],
          required: true
        },
      ),
      new MultipleChoice(
        {
          controlType: 'radio',
          key: 'male',
          label: 'Male',
          validators: {
            required: true,
          },
          disabled: false,
          value: 'Male',
          options: [
            {
              key: 'm',
              value: 'Male',
            },
            {
              key: 'f',
              value: 'Female',
            }
          ],
        },
      ),
      new Checkbox(
        {
          controlType: 'checkbox',
          key: 'f',
          label: 'Fishing',
          value: false,
          checked: false,
          disabled: false,
          required: true
        },
      ),
      new Checkbox(
        {
          controlType: 'checkbox',
          key: 'c',
          label: 'Cooking',
          value: false,
          checked: false,
          disabled: false
        },
      ),
    ];

    return questions;
  }
}
