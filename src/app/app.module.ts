import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    // angular Modules
    BrowserModule,
    AppRoutingModule,
    // custom modules
    PassengerDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
