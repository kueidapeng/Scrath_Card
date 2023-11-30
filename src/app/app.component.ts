import { Component, OnInit } from "@angular/core";

const bg = require("../assets/images/600.png").default as string;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  imageSrc = "../../assets/images/600.png";

  ngOnInit(): void {
    var isdown = false;
    const cover = <HTMLCanvasElement>document.getElementById("cover");
    const covercanvas = cover.getContext("2d");
    console.log(cover);
    covercanvas.fillStyle = "transparent";
    covercanvas.fillRect(0, 0, 400, 400);

    function fillter(canvas) {
      canvas.fillStyle = "#ccc";
      canvas.fillRect(0, 0, 400, 400);
    }
    function isDown(e) {
      e.preventDefault();
      isdown = true;
    }
    function isUp(e) {
      isdown = false;
    }
    function draw(e) {
      e.preventDefault();
      if (isdown) {
        console.log(isdown);
        if (e.changedTouches) {
          e = e.changedTouches[e.changedTouches.length - 1];
        }

        var _height = (window.innerHeight - 400) / 2,
          _width = (window.innerWidth - 400) / 2,
          touchTop = e.clientY - _height,
          touchLeft = e.clientX - _width;

        if (covercanvas) {
          covercanvas.beginPath();
          covercanvas.arc(touchLeft, touchTop, 10, 0, Math.PI * 2);
          covercanvas.fill();
        }
      }
      //alert(touchTop);
    }
    fillter(covercanvas);
    covercanvas.globalCompositeOperation = "destination-out";
    cover.addEventListener("touchstart", isDown);
    cover.addEventListener("touchmove", draw);
    cover.addEventListener("touchend", isUp);
    cover.addEventListener("mousemove", draw);
    cover.addEventListener("mousedown", isDown);
    cover.addEventListener("mouseup", isUp);
  }
}
