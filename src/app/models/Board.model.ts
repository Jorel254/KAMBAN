import { Column } from './Column.model';
export class Board {
    constructor( public name :string, public columns :Column[]) {
    }

}
