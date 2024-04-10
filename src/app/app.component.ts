import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneratedFormComponent } from "./components/generated-form/generated-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, GeneratedFormComponent]
})
export class AppComponent {
  title = 'form-from-json';
}
