// Post-it
// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class PostIt {
    _backgroundColor: string;
    _text: string;
    _textColor: string;

    constructor (backgroundColor: string, text: string, textColor: string) {
        this._backgroundColor = backgroundColor;
        this._text = text;
        this._textColor = textColor;
    }
}

let idea1 = new PostIt ('orange', 'Idea 1', 'blue');
let amesome = new PostIt ('pink', 'Awesome', 'black');
let superb = new PostIt ('yellow', 'Subperb!', 'green');
