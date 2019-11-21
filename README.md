# DBash

Tool for converting data between SQL and JS types easily. It's more like a test library to see how npm packages work. Name inspired by [Lodash](https://github.com/lodash/lodash) - the ultimate JavaScript toolkit.

## Installation

Installation is same for most of the Node.js packages:

```bash
# NPM
$ npm install --save dbash

# Yarn
$ yarn add dbash
```

DBash is also available from [GitHub Package Registry](https://help.github.com/en/github/managing-packages-with-github-packages/about-github-packages).

## Usage

```javascript
// CommonJS
var _ = require('dbash');
console.log(_.sqlIntJsBool(1));

// ES2015
import { sqlIntJsBool } from 'dbash';
console.log(sqlIntJsBool(1));

// Also ES2015
import * as _ from 'dbash';
console.log(_.sqlIntJsBool(1));
```

## Functions

### Boolean

```javascript
jsBoolSqlInt(input: boolean): number
// Takes JavaScript boolean or null and returns 1 or 0

sqlIntJsBool(input: number): boolean
// Takes SQL number or null and returns true or false
```

### Date

#### Date

```javascript
jsDateSqlDate(input: Date): string
// Takes JavaScript Date and returns corresponding SQL Date string

sqlDateJsDate(input: string): Date
// Takes SQL DATE and returns corresponding JS Date object
// Accepts `2010-07-28` and `10-07-28` formats
```

#### DateTime

```javascript
jsDateSqlDateTime(input: Date): string
// Takes JavaScript Date and returns corresponding SQL DateTime string

sqlDateTimeJsDate(input: string): Date
// Takes SQL DateTime and returns corresponding JS Date object
// Accepts `2010-07-28 11:12:13` and `10-07-28 11:12:13` formats
```
