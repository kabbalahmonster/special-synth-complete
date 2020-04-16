import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrooveboxComponent } from './groovebox.component';

describe('GrooveboxComponent', () => {
  let component: GrooveboxComponent;
  let fixture: ComponentFixture<GrooveboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrooveboxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrooveboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
