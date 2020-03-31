import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import * as FlipClock from "./flipclock";

const RELEASE_DATE = new Date("2020-04-01T12:00:00-07:00");

@Component({
  selector: "app-flipclock",
  templateUrl: "./flipclock.component.html",
  styleUrls: ["./flipclock.component.scss"]
})
export class FlipclockComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    if (!FlipClock) {
      throw Error("FlipClock was not imported and injected to jQuery.");
    }
    $(".cd100").each(function() {
      const timeNow = new Date();
      const MillisecondsCounter = RELEASE_DATE.getTime() - timeNow.getTime();

      const clock = $(this)["FlipClock"](MillisecondsCounter / 1000, {
        clockFace: "DailyCounter",
        // autoStart: false,
        countdown: true,
        // language: 'hebrew',
        callbacks: {
          start() {
            console.log(this);
          },
          interval() {
            // The amount of seconds left.
            const timeRemaining = this.factory.time.time;
            // console.log(timeRemaining);
          }
        }
      });
      // clock.stop();
      // setTimeout(() => {
      //   clock.start();
      // }, 5000);
      console.log($(this)["FlipClock"]);
    });
  }
}
