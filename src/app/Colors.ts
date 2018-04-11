export class Color {
    constructor(
        public title: string,
        public hex: string,
        ) {
            this.title = title;
            this.hex = hex;
        }

    // static setBackgroundProperty(c) {
    //     return 'background: ' + c;
    // }
}

let c1 = new Color('lemon', '#F5F6CE');
let c2 = new Color('brown', '#2A0A0A');
let c3 = new Color('blue', '#045FB4');
let c4 = new Color('white', '#FFFFFF');
let c5 = new Color('cyan', '#CEF6F5');
let c6 = new Color('violet', '#170B3B');
let c7 = new Color('grey', '#5D5D5D');

export const Colors = [c1, c2, c3, c4, c5, c6, c7];

