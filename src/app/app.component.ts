import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisciplinaComponent } from "./componente/disciplina/disciplina.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DisciplinaComponent]
})
export class AppComponent {
  title = 'projeto-integrador';
}
