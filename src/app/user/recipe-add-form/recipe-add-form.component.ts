import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RecipeService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-recipe-add-form',
  templateUrl: './recipe-add-form.component.html',
  styleUrls: ['./recipe-add-form.component.css']
})

export class RecipeAddFormComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  validateForm = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    description: this.fb.control('', [Validators.required]),
    image: this.fb.control('', [Validators.required]),
    ingredients: this.fb.control('', [Validators.required]),
    instructions: this.fb.control('', [Validators.required]),
  });

  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  constructor(private fb: NonNullableFormBuilder, private recipeService:RecipeService) {}

  ngOnInit(): void {
    // No additional logic required for validation or form initialization at the moment
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm(): void {
    const userEmail = localStorage.getItem('email'); // Retrieve email from localStorage
    if (this.validateForm.valid && userEmail) {
      const newRecipe = {
        ...this.validateForm.value,
        id: this.generateId(), // Assuming a method to generate a unique ID
        providerId: userEmail.replace(/"/g, '')// Set the providerId as the retrieved email
      };
      console.log('submit', newRecipe);
  
      this.recipeService.saveRecipe(newRecipe); // Code to save newRecipe to JSON server or desired service
      this.validateForm.reset();
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  generateId(): string {
    return (Math.random() * 1e16).toString(36).substring(0, 8); // Generates a unique alphanumeric string
  }
  
  onFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files ? inputElement.files[0] : null;
  
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        this.convertToBase64(file).then((base64: string) => {
          this.validateForm.patchValue({
            image: base64
          });
        });
      };
    }
  }
  
  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }
  


}  
