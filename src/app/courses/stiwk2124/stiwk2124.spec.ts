import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stiwk2124 } from './stiwk2124';

describe('Stiwk2124', () => {
  let component: Stiwk2124;
  let fixture: ComponentFixture<Stiwk2124>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stiwk2124]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stiwk2124);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
