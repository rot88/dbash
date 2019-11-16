# DBash

Tool for converting data between SQL and JS types easily. It's more like a test library to see how npm packages work.

## Installation

NPM:
```bash
$ npm install --save dbash
```

YARN:
```bash
$ yarn add dbash
```

## Usage

CommonJS:
```javascript
var _ = require('dbash');
console.log(_.sqlIntJsBool(1));
```

ES2015:
```javascript
import { sqlIntJsBool } from 'dbash';
console.log(sqlIntJsBool(1));
```

Also ES2015:
```typescript
import * as _ from 'dbash';
console.log(_.sqlIntJsBool(1));
```

## Functions

### Boolean

```javascript
jsBoolSqlInt(input: boolean | null): number | null
```
Takes JavaScript boolean or null and returns 1, 0 or null

```javascript
sqlIntJsBool(input: number | null): boolean | null
```
Takes SQL number or null and returns true, false or null


### Date

#### DATE

```javascript
jsDateSqlDate(input: Date | null): string | null
```
Takes JavaScript Date or null and returns corresponding SQL Date string or null

```javascript
sqlDateJsDate(input: string | null): Date | null
```
Takes SQL DATE and returns corresponding JS Date or null
Accepts `2010-07-28` or `10-07-28` formats. Years that are less than 1970 or more than 2037 throw ValueError