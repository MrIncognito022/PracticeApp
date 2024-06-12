import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from "./components/reactive-form/reactive-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ReactiveFormComponent]
})
export class AppComponent {
  title = 'practiceApp';
}
