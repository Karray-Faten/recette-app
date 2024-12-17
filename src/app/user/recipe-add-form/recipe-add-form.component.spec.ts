import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddFormComponent } from './recipe-add-form.component';

describe('RecipeAddFormComponent', () => {
  let component: RecipeAddFormComponent;
  let fixture: ComponentFixture<RecipeAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeAddFormComponent]
    });
    fixture = TestBed.createComponent(RecipeAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
