import { NovaTransferenciaComponent } from './nova-transferencia/nova-tranferencia.component';
import { BrowserModule } from "@angular/platform-browser";
import { ApplicationModule, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
