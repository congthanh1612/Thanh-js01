import { Node } from "./node";
export class Sprite extends Node{
   constructor() {
    super();
    this._imageSrc='';
   }
  _createElement() {
    let elm = document.createElement("img");
    elm.style.position = "absolute";
    elm.style.height=this._height;
    elm.style.width=this._width;
    return elm;
}
get imageSrc() { return this._imageSrc; }
set imageSrc(value) {
    this._imageSrc = value;
    this.elm.src = this._imageSrc;
}
}