// ==UserScript==
// @name         Gather Town Capture
// @namespace    https://www.moontai0724.tw
// @version      0.1
// @description  Capture current screen without UI on gather.town by pressing "P" key
// @author       moontai0724
// @match        https://gather.town/app/*
// @icon         https://www.google.com/s2/favicons?domain=gather.town
// @grant        MIT
// ==/UserScript==

(function () {
  "use strict";

  document.addEventListener("keydown", function (keydownEvent) {
    if (keydownEvent.code !== "KeyP") return;

    const time = new Date().toLocaleString("zh-tw", {
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      fractionalSecondDigits: 3,
    });

    const sources = document.getElementsByTagName("canvas");
    const canvas = document.createElement("canvas");
    const { height, width } = document.getElementById("canvas");
    canvas.height = height;
    canvas.width = width;

    Promise.all(
      Array.from(sources).map((element) => {
        return new Promise(function (resolve, reject) {
          let image = new Image();
          image.src = element.toDataURL();
          image.addEventListener("load", (onImageLoadEvent) => {
            let imageData = onImageLoadEvent.target;
            let context = canvas.getContext("2d");
            context.drawImage(imageData, 0, 0);
            resolve();
          });
        });
      })
    ).then(() => {
      var link = document.createElement("a");
      link.download = `${document.title.slice(0, -9)} - ${time}.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  });
})();
