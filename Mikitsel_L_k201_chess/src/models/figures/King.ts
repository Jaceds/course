import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";
import { Board } from "../Board";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }
  canMove(target: Cell): boolean {
    if(!super.canMove(target))
      return false;
      const dx = Math.abs(this.cell.x - target.x);
      const dy = Math.abs(this.cell.y - target.y);
      const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
      if((dx === 1 && dy === 0) || (dx ===0 && dy === 1) || (dx ===1 && dy === 1)){
        console.log(`from ${this.cell.x } ${this.cell.y }`)
        console.log(`to ${target.x} ${target.y}`)
      
        return true
      }
      return false
  
     // return (dx === 1 && dy === 0) || (dx ===0 && dy === 1) || (dx ===1 && dy === 1) ;
  }
}