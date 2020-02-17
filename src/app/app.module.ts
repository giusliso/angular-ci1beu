import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DxDataGridModule } from "devextreme-angular";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";

@NgModule({
   imports: [BrowserModule, DxDataGridModule, CommonModule],
   declarations: [AppComponent],
   bootstrap: [AppComponent]
})
export class AppModule {}
