export class Particle {
    // Properties
    private x: number = 0;
    private y: number = 0;
    private isactive: boolean = false;
    private hasbordercolor: boolean = false;
    private hasfillcolor: boolean = false;
    private bordercolor: string = "FFFFFFFF";
    private fillcolor: string = "FFFFFFFF"; // White
    private borderwidth: number = 1;
    private radius: number = 3;

    // CTOR
    constructor(
        x: number,
        y: number,
        isactive: boolean,
        hasbordercolor: boolean,
        hasfillcolor: boolean,
        bordercolor: string,
        fillcolor: string,
        borderwidth: number,
        radius: number
    ) {
        this.setXY(x, y);
        this.setIsActive(isactive);
        this.setHasBorderColor(hasbordercolor);
        this.setHasFillColor(hasfillcolor);
        this.setBorderColor(bordercolor);
        this.setFillColor(fillcolor);
        this.setBorderWidth(borderwidth);
        this.setRadius(radius);

        // Testing log
        console.log("Created particle.");
        console.log(this.toString());
    }

    // Getters and Setters
    public getXY(): number[] {
        return [this.x, this.y];
    }

    public isActive(): boolean {
        return this.isactive;
    }

    public hasBorderColor(): boolean {
        return this.hasbordercolor;
    }

    public hasFillColor(): boolean {
        return this.hasfillcolor;
    }

    public getBorderColor(): string {
        return this.bordercolor;
    }

    public getFillColor(): string {
        return this.fillcolor;
    }

    public getBorderWidth(): number {
        return this.borderwidth;
    }

    public getRadius(): number {
        return this.radius;
    }

    // Setters

    public setXY(x: number, y: number): number[] {
        if (x > 0)
            this.x = x;
        if (y > 0)
            this.y = y;
        return [this.x, this.y];
    }

    public setIsActive(isactive: boolean): boolean {
        this.isactive = isactive;
        return this.isactive;
    }

    public setHasBorderColor(hasbordercolor: boolean): boolean {
        this.hasbordercolor = hasbordercolor;
        return this.hasbordercolor;
    }

    public setHasFillColor(hasfillcolor: boolean): boolean {
        this.hasfillcolor = hasfillcolor;
        return this.hasfillcolor;
    }

    /* Must be a RGBA value in hex */
    public setBorderColor(bordercolor: string | null): string {
        if (bordercolor == null)
            return this.bordercolor;
        // Invalid input
        if (bordercolor.length != 8)
            return this.bordercolor;

        // Checks to make sure all letters are Hex values.
        let regex = /[0-9A-Fa-f]{6}/g;
        if (bordercolor.match(regex))
            this.bordercolor = bordercolor;

        return this.bordercolor;
    }

    // Must be a RGBA value in Hex.
    public setFillColor(fillcolor: string | null): string {
        if (fillcolor == null)
            return this.fillcolor;
        // Invalid input
        if (fillcolor.length != 8)
            return this.fillcolor;

        // Checks to make sure all letters are Hex values.
        let regex = /[0-9A-Fa-f]{6}/g;
        if (fillcolor.match(regex))
            this.fillcolor = fillcolor;
        return this.fillcolor;
    }

    public setBorderWidth(width: number | null): number {
        if (width == null)
            return this.borderwidth;
        if (width > 0)
            this.borderwidth = width;
        return this.borderwidth;
    }

    public setRadius(radius: number): number {
        if (radius >= 1)
            this.radius = radius;
        return this.radius;
    }

    // Methods

    // TODO:: Draw
    public draw(ctx: CanvasRenderingContext2D | null): void {
        if (ctx == null || this.isActive() == false)
            return;
        console.log("Drawing particle.");

        // Drawing the circle
        ctx.beginPath();
        ctx.arc(this.getXY()[0], this.getXY()[1], this.getRadius(), 0, Math.PI * 2, false);

        if (this.hasFillColor()) {
            ctx.fillStyle = "#" + this.getFillColor();
            ctx.fill();
        }
        if (this.hasBorderColor()) {
            ctx.strokeStyle = "#" + this.getBorderColor();
            ctx.stroke();
        }
        ctx.closePath();
    }

    public toString(): string {
        let temp: string;
        temp = "X: " + this.getXY()[0] + " Y: " + this.getXY()[1];
        temp += " is active: " + this.isActive();
        temp += " has border color: " + this.hasBorderColor();
        temp += " has fill color: " + this.hasFillColor();
        temp += " border color: " + this.getBorderColor();
        temp += " fill color: " + this.getFillColor();
        temp += " border width: " + this.getBorderWidth();
        temp += " radius: " + this.getRadius();

        return temp;
    }

}