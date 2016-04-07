![Symbold](symbold.png?raw=true)
> Symbols list


[![Build](https://travis-ci.org/NicolasPio/symbold.svg?branch=master)](https://travis-ci.org/NicolasPio/symbold)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Coverage Status](https://coveralls.io/repos/github/NicolasPio/symbold/badge.svg?branch=master)](https://coveralls.io/github/NicolasPio/symbold?branch=master)

## Install
```
$ npm install --save symbold
```

## Usage
```javascript
const symbold = require('symbold');

console.log(symbold);
// Return: [ '!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '=', '+', '\'', '"', '[', ']', '{', '}', '<', '>', ',', '.', ';', ':', '/', '?', '|', '\\' ]

console.log(symbold[5]);
// Return: &

console.log(symbold.join())
// Return: '!,@,#,$,%,&,*,(,),-,_,=,+,\,",[,],{,},<,>,,,.,;,:,/,?,|,\\'
```

## License
The MIT License (MIT)

Copyright (c) [Nicolas Pio](https://github.com/NicolasPio)
