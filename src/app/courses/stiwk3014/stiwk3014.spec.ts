import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stiwk3014 } from './stiwk3014';

describe('Stiwk3014', () => {
  let component: Stiwk3014;
  let fixture: ComponentFixture<Stiwk3014>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stiwk3014]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stiwk3014);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
