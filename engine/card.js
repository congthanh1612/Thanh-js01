import { Node } from "./node";
import { Sprite } from "./sprite";
export class Card {
    constructor(imageSrc, x, y) {
        this._isFlipped=false;
        this._imageSrc = imageSrc;
        this.node = new Node();
        this.image = new Sprite();
        this.node.elm.appendChild(this.image.elm);
        document.body.appendChild(this.node.elm);
        Card.width = 170;
        Card.height = 250;
        Card.x = x;
        Card.y = y;
    }
}