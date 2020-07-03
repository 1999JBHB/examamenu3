import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'Examen-Bonny-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.css']
})
export class AddTareaComponent implements OnInit {
  @Input() tarea: any = {};
  @Output() tareaSeleccionada: EventEmitter<number>;
  constructor() {
    this.tareaSeleccionada = new EventEmitter();
  }

  ngOnInit(): void {
  }
  cheked(index: number){
    // this.router.navigate( ['/heroe', this.index] );
    // console.log(this.index);
     this.tareaSeleccionada.emit(index);
  }


}