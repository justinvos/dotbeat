# dotbeat

Simple Swatch Internet Time grabber and formatter. 

### Installation

```npm install dotbeat```

### Usage

```
var dotbeat = require("dotbeat")

console.log(dotbeat.get()) //                 511
console.log(dotbeat.get("number)) //          511
console.log(dotbeat.get("string")) //         @511
console.log(dotbeat.get("string", true)) //   @511.12
console.log(dotbeat.get("number", true)) //   511.12
```