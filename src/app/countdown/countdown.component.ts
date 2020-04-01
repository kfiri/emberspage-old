import { Component, HostListener } from "@angular/core";

const GIANT_VIDEO_SIZE = { width: 893, height: 503 };
const LARGE_VIDEO_SIZE = { width: 595, height: 335 };
const MEDIUM_VIDEO_SIZE = { width: 397, height: 223 };
const SMALL_VIDEO_SIZE = { width: 298, height: 168 };

@Component({
  selector: "app-countdown",
  templateUrl: "./countdown.component.html",
  styleUrls: ["./countdown.component.scss"]
})
export class CountdownComponent {
  embeddedVideoWidth = MEDIUM_VIDEO_SIZE.width;
  embeddedVideoHeight = MEDIUM_VIDEO_SIZE.height;

  constructor() {
    this.setVideoSize(window.innerWidth, window.innerHeight);
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.setVideoSize(event.target.innerWidth, event.target.innerHeight);
  }

  private setVideoSize(windowWidth: number, windowHeight: number) {
    if (windowWidth <= 479) {
      ({
        width: this.embeddedVideoWidth,
        height: this.embeddedVideoHeight
      } = SMALL_VIDEO_SIZE);
    } else if (windowWidth <= 767 || windowHeight < 550) {
      ({
        width: this.embeddedVideoWidth,
        height: this.embeddedVideoHeight
      } = MEDIUM_VIDEO_SIZE);
    } else if (windowWidth <= 1200 || windowHeight < 750) {
      ({
        width: this.embeddedVideoWidth,
        height: this.embeddedVideoHeight
      } = LARGE_VIDEO_SIZE);
    } else {
      ({
        width: this.embeddedVideoWidth,
        height: this.embeddedVideoHeight
      } = GIANT_VIDEO_SIZE);
    }
  }
}
