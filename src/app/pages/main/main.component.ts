import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Board } from '../../models/Board.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Column } from 'src/app/models/Column.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  board: Board = new Board('Board', [
    new Column('Ideas', [ 'Some random idea', 'This is another random idea', 'build an awesome application' ]),
    new Column('Research', [ 'Lorem ipsum', 'foo', 'This was in the research column' ]),
    new Column('Todo', [ 'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep' ]),
  ]);

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
