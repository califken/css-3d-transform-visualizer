import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { RippleModule } from "primeng/ripple";
import { SliderModule } from "primeng/slider";
import { KnobModule } from "primeng/knob";

import { TransformVisualizerComponent } from "./transform-visualizer/transform-visualizer.component";

@NgModule({
  declarations: [AppComponent, TransformVisualizerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    CardModule,
    InputNumberModule,
    InputTextModule,
    KnobModule,
    RippleModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
