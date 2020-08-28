# alfred-coder [![Build Status](https://travis-ci.org/IOIO72/alfred-coder.svg?branch=master)](https://travis-ci.org/IOIO72/alfred-coder)

> Coder - Encode/decode input to clipboard (Alfred 4)


## Install

```
$ npm install --global alfred-coder
```

*Requires [Node.js](https://nodejs.org) 8+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*


## Usage

In Alfred, type `coder`, <kbd>Enter</kbd> and your query.

Additionally, you may configure an hotkey for Coder in Alfred, which gives you the ability to select a text in any app, hit your hotkey to pass the selected text directly to Coder.

By default, Coder encodes the query through the following coders:

- URI
- URI Component
- HTML Entities
- Base64

To decode the selected result press ⌘.


## License

MIT License<br/>
Tamio Honma<br/>
https://www.honma.de
