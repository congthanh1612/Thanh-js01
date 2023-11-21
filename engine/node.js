export class Node { // entity
    
    constructor() {
        this._scalex = 1;
        this._scaley = 1;
        this._x=0;
        this._y=0;
        this._width=100;
        this._height=100;
        this._src='./image/cover.jpg';
        this.elm = this._createElement();
        this.children =[];
    }
    get x() { return this._x; }
    set x(value) {
        this._x = value;
        this.elm.style.left = this._x + "px";
    }
    get y() {return this._y;}
    set y(value) {
        this._y = value;
        this.elm.style.top = this._y + "px";
}
    get width(){return this._width;}
    set width(value) {
        this._width = value;
        this.elm.style.width = this._width + "px";
    }
    get height() { return this._height; }
    set height(value) { 
        this._height = value; 
        this.elm.style.height = this._height + "px"; 
    }
    get scaleX() {return this._scalex;}
    set scaleX(value) {
        this._scaleX = value;
        this.elm.style.transform = `scaleX(${this._scaleX})`;
    }
    get scaleY() {return this._scaleY;}
    set scaleY(value) {
        this.scaleY = value;
        this.elm.style.transform = `scaleY(${this._scaleY})`;
    }

    _createElement() {
        let elm = document.createElement("div");
        elm.style.position = "absolute";
        elm.style.height=this._height;
        elm.style.width=this._width;
        return elm;
    }
    get activeCard() {
        return this._activeCard;
    }
    set activeCard(value) {
        this._activeCard = value;
        this.elm.style.display = this._activeCard ? "block" : "none";
    }

    addChild(node) {
        this.elm.appendChild(node.elm);
        this.children.push(node);
    }
    removeChild(node) {
         this.elm.removeChild(node.elm);
    }

}