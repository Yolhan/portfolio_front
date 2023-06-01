import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Particle } from '../models/particle';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent{
  // Parameters
  @ViewChild('mycanvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D | null;


  public ngAfterViewInit() {
    
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx!.canvas.width = window.innerWidth;
    this.ctx!.canvas.height = window.innerHeight;

    let particle = new Particle(100, 100, true, true, true, "000000FF", "FFFFFFFF", 4, 10);
    particle.draw(this.ctx);
  }

}
