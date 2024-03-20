import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordHistoricComponent } from './word-historic.component';

describe('WordHistoricComponent', () => {
  let component: WordHistoricComponent;
  let fixture: ComponentFixture<WordHistoricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordHistoricComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
