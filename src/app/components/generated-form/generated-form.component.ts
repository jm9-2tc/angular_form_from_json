import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

import { FormJsonService } from '../../services/form-json-service/form-json.service';
import { ApiService } from '../../services/api-service/api.service';
import { FormFieldComponent } from "../form-field/form-field.component";
import { FormField } from '../../models/form-field.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-generated-form',
    standalone: true,
    templateUrl: './generated-form.component.html',
    styleUrl: './generated-form.component.scss',
    imports: [NgIf, NgFor, ReactiveFormsModule, FormFieldComponent]
})
export class GeneratedFormComponent implements OnInit {
  formFieldsData: FormField[] = [];
  formGroup!: FormGroup;
  
  constructor (private formJsonService: FormJsonService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.formJsonService.getFormModel().subscribe(formModel => this.prepareFormControls(formModel));
  }

  prepareFormControls(rawFormModel: any) {
    const formFields: { [key: string]: FormControl } = {};

    for (const key in rawFormModel) {
      const fieldData = rawFormModel[key];
      formFields[key] = new FormControl('');
      this.formFieldsData.push({ name: key, type: fieldData.type, options: fieldData.options });
    }

    this.formGroup = new FormGroup(formFields);
  }

  sendFormData() {
    this.apiService.sendForm(this.formGroup.value);
  }
}
