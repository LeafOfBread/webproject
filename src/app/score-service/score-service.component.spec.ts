import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreServiceComponent } from './score-service.component';

describe('ScoreServiceComponent', () => {
  let component: ScoreServiceComponent;
  let fixture: ComponentFixture<ScoreServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScoreServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
