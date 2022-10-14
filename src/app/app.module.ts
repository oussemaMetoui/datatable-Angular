import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DataTableComponent } from './components/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    DataTableComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
