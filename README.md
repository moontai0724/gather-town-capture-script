# Gather Town Capture Tool

A script to capture screen without UI on gather.town in just a press.

## Getting Started

### Requirement

You have to install extensions whcih can install and execute user scripts.

It's recommended to install Tampermonkey, which you can install from following links: [Chrome](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey), [Safari](https://safari.tampermonkey.net/tampermonkey.safariextz).

### Install Script

After installed extension, you can download and install this script from these link:

[https://github.com/moontai0724/gather-town-capture-script/raw/main/main.user.js](https://github.com/moontai0724/gather-town-capture-script/raw/main/main.user.js)

[https://greasyfork.org/scripts/430114](https://greasyfork.org/scripts/430114)

## Usage

Just simply press following hoykey when you're in a map, and it will automatically download an image with filename in specific format.

### Set Canvas Zoom

Image resolution will depends on your setting of Canvas Zoom in Settings of Gather Town, which is a gearwheel icon in left bar.

The image resolution is proportional to the canvas zoom size, 400% of manual canvas zoom will got best resolution.

With bigger resolution, it requires more time and perfomence for your browser to render and merge it.

To adjust zoom manually, just turn off `Use Smart Zoom` option.

### Hoykeys

By pressing `Shift + P` will capture current viewpoint.

By pressing `Shift + F` will capture full map.

### Filename Format

```
<Map Title> - yyyy-MM-dd_HH-mm-ss.SSS
```

for example:

```
COSCUP Party 1 - 2021-07-30_19-47-48.466
```

## Known Issues

We've already known that canvas size has a limitation, when it exceeds the limitation, it will failed to download.

For more info: https://stackoverflow.com/questions/6081483
