import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabuadaComponent } from './tabuada.component';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot],
  declarations: [
    AppComponent,
    HelloComponent,
    TabuadaComponent,
    AboutComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
