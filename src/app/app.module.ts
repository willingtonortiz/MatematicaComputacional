/* MODULOS */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* COMPONENTES */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
