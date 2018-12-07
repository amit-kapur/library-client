import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookMainComponent } from './book-main/book-main.component';

const routes: Routes = [
	{
		path: '',
		component: BookMainComponent
	},
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
