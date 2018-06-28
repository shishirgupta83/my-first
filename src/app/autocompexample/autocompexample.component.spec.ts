import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompexampleComponent } from './autocompexample.component';

describe('AutocompexampleComponent', () => {
  let component: AutocompexampleComponent;
  let fixture: ComponentFixture<AutocompexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
