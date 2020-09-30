import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-unicorn',
  templateUrl: './create-unicorn.component.html',
  styleUrls: ['./create-unicorn.component.sass']
})
export class CreateUnicornComponent implements OnInit {
  unicornForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.unicornForm = this.fb.group({
      unicornName: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.maxLength(2), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      color: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+$/)]]
    });
  }

  save(): void {
    console.log(this.unicornForm);
    console.log('Saved: ' + JSON.stringify(this.unicornForm.value));
  }

  populateTestData(): void {

  }
}
