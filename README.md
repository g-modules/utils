# Utils - Simple functions

[![CodeQL](https://github.com/g-modules/utils/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/g-modules/utils/actions/workflows/codeql-analysis.yml)

## Installation and Usage
```bash
npm install @g-modules/utils
```

### Import all functions
```js
import utils from "@g-modules/utils"

const random = utils.randomNumber()
```

### Import some functions
```js
import { randomNumber, randomBool } from "@g-modules/utils"; // import some modules

const random = randomNumber()
```

## Functions:
### randomNumber()

Return a random value between the minimum and maximum numbers, inclusive them. 
Params by default is **0** and **100**: `randomNumber(0,100)`.

```js
import { randomNumber } from "@g-modules/utils";

const withoutParams = randomNumber();
console.log(withoutParams); // expect number between 0 and 100

const withParams = randomNumber(10,20);
console.log(withParams); // expect number between 10 and 20
```

---

### randomBool()
Return a random true/false value. 
Can be used with chance param, between **0** and **100**, where 0 is always `false`, and 100 is always `true`.

Default param: `randomBool(50)`.

```js
import { randomBool } from "@g-modules/utils";

const withoutParams = randomBool();
console.log(withoutParams); // expect true with 50% chance

const chance20 = randomBool(20);
console.log(chance20); // expect true with 20% chance

const chance100 = randomBool(100);
console.log(chance100); // expect true with 100% chance
```

---

### randomId()
Return ID in GUID format (random): `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

```js
import { randomId } from "@g-modules/utils";

const id = randomId();
console.log(id); // expect id string (9bf8ff26-cca2-efa4-a1dc-9ce2928b0770)
```

---

### uppercaseFirstLetter()
Uppercasing first letter:

```js
import { uppercaseFirstLetter } from "@g-modules/utils";

const original = "hello world!"
const uppercasing = uppercaseFirstLetter(original)
console.log(uppercasing); // expect "Hello world!"
```

---

### shuffleArray()
Shuffling passed array (Durstenfeld shuffle).

```js
import { shuffleArray } from "@g-modules/utils";

const original = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const shuffled = shuffleArray(original)
console.log(shuffled) //expect [5, 4, 6, 9, 2, 8, 7, 1, 3, 0]
```

---

### uniqObjectsInArray()
Leave only unique objects in the array.

```js
import { uniqObjectsInArray } from "@g-modules/utils";

const original = [
	{id: 1, text: "hi!"},
	{id: 2, text: "hello"},
	{id: 3, text: "hi!"}
]
const uniq = uniqObjectsInArray(original, "text") // uniq be "text" key
console.log(uniq) //expect [{ id: 3, text: 'hi!' }, { id: 2, text: 'hello' }
```

