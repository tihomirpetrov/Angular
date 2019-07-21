import { Injectable } from '@angular/core';
import { Input, MultipleChoice, Checkbox } from './form-controls/form-controls';
import { FormControlBase } from './form-controls/form-control-base';

@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {
    const questions: FormControlBase<any>[] = [

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
          key: 'bg',
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
