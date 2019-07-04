import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PassengerDashboardComponent } from './passenger-dashboard.component'

describe('PassengerDashboardComponent', () => {
  let component: PassengerDashboardComponent
  let fixture: ComponentFixture<PassengerDashboardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerDashboardComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerDashboardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render title in a h3 tag', () => {
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h3').textContent).toContain(
      'Airline Passengers'
    )
  })
})
