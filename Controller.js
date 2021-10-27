"use strict";

// Stores the state of some keys on the keyboard
const Controller = class {
    static Button;

    constructor() {
        this.keydownListener = document.addEventListener("keydown", this.keydown.bind(this));
        this.keyupListener = document.addEventListener("keyup", this.keyup.bind(this));
        this.mousedownListener = document.addEventListener("mousedown", this.mousedown.bind(this));
        this.mouseupListener = document.addEventListener("mouseup", this.mouseup.bind(this));

        this.mouseLeft = new Controller.Button("mouseLeft");
        this.mouseMiddle = new Controller.Button("mouseMiddle");
        this.mouseRight = new Controller.Button("mouseRight");

        this.arrowLeft = new Controller.Button("arrowLeft");
        this.arrowRight = new Controller.Button("arrowRight");
        this.arrowDown = new Controller.Button("arrowDown");
        this.arrowUp = new Controller.Button("arrowUp");

        this.a = new Controller.Button("a");
        this.b = new Controller.Button("b");
        this.c = new Controller.Button("c");
        this.d = new Controller.Button("d");
        this.e = new Controller.Button("e");
        this.f = new Controller.Button("f");
        this.g = new Controller.Button("g");
        this.h = new Controller.Button("h");
        this.i = new Controller.Button("i");
        this.j = new Controller.Button("j");
        this.k = new Controller.Button("k");
        this.l = new Controller.Button("l");
        this.m = new Controller.Button("m");
        this.n = new Controller.Button("n");
        this.o = new Controller.Button("o");
        this.p = new Controller.Button("p");
        this.q = new Controller.Button("q");
        this.r = new Controller.Button("r");
        this.s = new Controller.Button("s");
        this.t = new Controller.Button("t");
        this.u = new Controller.Button("u");
        this.v = new Controller.Button("v");
        this.w = new Controller.Button("w");
        this.x = new Controller.Button("x");
        this.y = new Controller.Button("y");
        this.z = new Controller.Button("z");

        this.num0 = new Controller.Button("num0");
        this.num1 = new Controller.Button("num1");
        this.num2 = new Controller.Button("num2");
        this.num3 = new Controller.Button("num3");
        this.num4 = new Controller.Button("num4");
        this.num5 = new Controller.Button("num5");
        this.num6 = new Controller.Button("num6");
        this.num7 = new Controller.Button("num7");
        this.num8 = new Controller.Button("num8");
        this.num9 = new Controller.Button("num9");

        // first row miscellaneous keys
        this.escape = new Controller.Button("escape");

        // second row
        this.backquote = new Controller.Button("backquote");
        this.minus = new Controller.Button("minus");
        this.equal = new Controller.Button("equal");
        this.backspace = new Controller.Button("backspace");

        // third row
        this.tab = new Controller.Button("tab");
        this.bracketLeft = new Controller.Button("bracketLeft");
        this.bracketRight = new Controller.Button("bracketRight");
        this.backslash = new Controller.Button("backslash");

        // fourth row
        this.semicolon = new Controller.Button("semicolon");
        this.quote = new Controller.Button("quote");
        this.enter = new Controller.Button("enter");

        // fifth row
        this.shiftLeft = new Controller.Button("shiftLeft");
        this.comma = new Controller.Button("comma");
        this.period = new Controller.Button("period");
        this.slash = new Controller.Button("slash");
        this.shiftRight = new Controller.Button("shiftRight");

        // sixth row
        this.controlLeft = new Controller.Button("controlLeft");
        this.altLeft = new Controller.Button("altLeft");
        this.space = new Controller.Button("space");
        this.altRight = new Controller.Button("altRight");
        this.controlRight = new Controller.Button("controlRight");
    }
    keydown(e) {
        if (e.key == 0 || e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == 7 || e.key == 8 || e.key == 9) {
            this["num" + e.key].active = true;
        } else {
            if (e.key == "Escape") {
                this.escape.active = true;
            } else if (e.key == "`") {
                this.backquote.active = true;
            } else if (e.key == "-") {
                this.minus.active = true;
            } else if (e.key == "=") {
                this.equal.active = true;
            } else if (e.key == "Backspace") {
                this.backspace.active = true;
            } else if (e.key == "Tab") {
                this.tab.active = true;
            } else if (e.key == "[") {
                this.bracketLeft.active = true;
            } else if (e.key == "]") {
                this.bracketRight.active = true;
            } else if (e.key == "\\") {
                this.backslash.active = true;
            } else if (e.key == ";") {
                this.semicolon.active = true;
            } else if (e.key == "'") {
                this.quote.active = true;
            } else if (e.key == "Enter") {
                this.enter.active = true;
            } else if (e.key == "Shift") {
                if (e.location == 1) {
                    this.shiftLeft.active = true;
                } else if (e.location == 2) {
                    this.shiftRight.active = true;
                }
            } else if (e.key == ",") {
                this.comma.active = true;
            } else if (e.key == ".") {
                this.period.active = true;
            } else if (e.key == "/") {
                this.slash.active = true;
            } else if (e.key == "Control") {
                if (e.location == 1) {
                    this.controlLeft.active = true;
                } else if (e.location == 2) {
                    this.controlRight.active = true;
                }
            } else if (e.key == "Alt") {
                if (e.location == 1) {
                    this.altLeft.active = true;
                } else if (e.location == 2) {
                    this.altRight.active = true;
                }
            } else if (e.key == " ") {
                this.space.active = true;
            } else if (this[e.key] !== undefined) {
                this[e.key].active = true;
            }
        }
        console.log("You pressed the " + e.key + " button.");
    }
    keyup(e) {
        if (e.key == 0 || e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == 7 || e.key == 8 || e.key == 9) {
            this["num" + e.key].active = false;
        } else {
            if (e.key == "Escape") {
                this.escape.active = false;
            } else if (e.key == "`") {
                this.backquote.active = false;
            } else if (e.key == "-") {
                this.minus.active = false;
            } else if (e.key == "=") {
                this.equal.active = false;
            } else if (e.key == "Backspace") {
                this.backspace.active = false;
            } else if (e.key == "Tab") {
                this.tab.active = false;
            } else if (e.key == "[") {
                this.bracketLeft.active = false;
            } else if (e.key == "]") {
                this.bracketRight.active = false;
            } else if (e.key == "\\") {
                this.backslash.active = false;
            } else if (e.key == ";") {
                this.semicolon.active = false;
            } else if (e.key == "'") {
                this.quote.active = false;
            } else if (e.key == "Enter") {
                this.enter.active = false;
            } else if (e.key == "Shift") {
                if (e.location == 1) {
                    this.shiftLeft.active = false;
                } else if (e.location == 2) {
                    this.shiftRight.active = false;
                }
            } else if (e.key == ",") {
                this.comma.active = false;
            } else if (e.key == ".") {
                this.period.active = false;
            } else if (e.key == "/") {
                this.slash.active = false;
            } else if (e.key == "Control") {
                if (e.location == 1) {
                    this.controlLeft.active = false;
                } else if (e.location == 2) {
                    this.controlRight.active = false;
                }
            } else if (e.key == "Alt") {
                if (e.location == 1) {
                    this.altLeft.active = false;
                } else if (e.location == 2) {
                    this.altRight.active = false;
                }
            } else if (e.key == " ") {
                this.space.active = false;
            } else if (this[e.key] !== undefined) {
                this[e.key].active = false;
            }
        }
        console.log("You lifted the " + e.key + " button.");
    }
    mousedown(e) {
        if (e.button == 0) {
            this.mouseLeft.active = true;
            console.log("You pressed the mouseLeft button.");
        } else if (e.button == 1) {
            this.mouseMiddle.active = true;
            console.log("You pressed the mouseMiddle button.");
        } else if (e.button == 2) {
            this.mouseRight.active = true;
            console.log("You pressed the mouseRight button.");
        }
    }
    mouseup(e) {
         if (e.button == 0) {
            this.mouseLeft.active = false;
            console.log("You lifted the mouseLeft button.");
        } else if (e.button == 1) {
            this.mouseMiddle.active = false;
            console.log("You lifted the mouseMiddle button.");
        } else if (e.button == 2) {
            this.mouseRight.active = false;
            console.log("You lifted the mouseRight button.");
        }
    }
}

Controller.Button = class {
    constructor(button) {
        this.button = button;
        this.active = false;
        this.data = {};
    }
    setData(key = "all", value = {}) {
        if (key == "all") {
            this.data = value;
        } else {
            this.data[key] = value;
        }
    }
    getData(key = "all") {
        if (key == "all") {
            return this.data;
        } else {
            return this.data[key];
        }
    }
}
