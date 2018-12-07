import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BookMainComponent } from './book-main/book-main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BookItemComponent } from './book-main/book-item/book-item.component';


@NgModule({
	declarations: [
		AppComponent,
		BookMainComponent,
		BookItemComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		ToastrModule.forRoot({
			positionClass: 'toast-top-center',
			preventDuplicates: true
		}),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
