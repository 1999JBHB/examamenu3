import { Component, Input } from '@angular/core';

@Component({
  selector: 'Examen-Bonny-add-nota',
  templateUrl: './add-nota.component.html',
  styleUrls: ['./add-nota.component.css']
})
export class AddNotaComponent {
  @Input() nota: any = {};
  constructor() { }
}