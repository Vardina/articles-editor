import { Component } from '@angular/core';
import { Color, Colors} from './Colors';

@Component({
    selector: 'styling',
    templateUrl: './styling.component.html',
    styleUrls: ['./styling.component.css']
})
export class StylingComponent {
    public size: number;
    public colors: Color[];
    public background: Color;
    public textColor: Color;

    constructor() {
        this.size = 14;
        this.colors = Colors;
        this.textColor = Colors[6];
        this.background = Colors[3];
    }

    increaseFont() {
        if (this.size < 30) {
            this.size++;
            document.getElementById('content').style.fontSize = this.size.toString() + 'px';
        }
    }

    decreaseFont() {
        if (this.size > 9) {
            this.size--;
            document.getElementById('content').style.fontSize = this.size.toString() + 'px';
        }
    }

    changeTextColor(color) {
        this.textColor = color;
        document.getElementById('content').style.color = this.textColor.hex;
    }

    changeBackgroundColor(color) {
        this.background = color;
        document.getElementById('content').style.backgroundColor = this.background.hex;
    }
}
