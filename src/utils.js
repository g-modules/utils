// return random number
const randomNumber = ( minimum = 0, maximum = 100 ) => Math.round( Math.random() * ( maximum - minimum ) + minimum );

// return random false/true, with chance. (0 - false, 100 - true)
const randomBool = ( chance = 50 ) => Math.random() <= chance / 100;

// return random ID (GUID format)
const randomId = () => {
	const group = () => Math.floor( ( 1 + Math.random() ) * 0x10000 ).toString( 16 ).substring( 1 );
	return `${group() + group()}-${group()}-${group()}-${group()}-${group()}${group()}${group()}`;
};

// uppercasing first letter in a string: "hello world!" => "Hello world!"
const uppercaseFirstLetter = ( string = "" ) => {
	try {
		if ( typeof string !== "string" ) throw new Error( `Passed param is not a string, but an ${typeof string}.` );
		if ( !string ) throw new Error( "Passed param is empty." );
		return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
	} catch ( error ) {
		throw new Error( error.message );
	}
};

// shuffle Array (Durstenfeld shuffle)
const shuffleArray = ( array ) => {
	const shuffled = array.slice( 0 );
	for ( let l = shuffled.length - 1; l > 0; l-- ) {
		const i = Math.floor( Math.random() * ( l + 1 ) );
		[shuffled[l], shuffled[i]] = [shuffled[i], shuffled[l]];
	}
	return shuffled;
};


// return only uniq Objects in Array, by object key
const uniqObjectsInArray = ( array, key ) => [...new Map( array.map( item => [item[key], item]) ).values()];


export { randomNumber, randomBool, randomId, uppercaseFirstLetter, shuffleArray, uniqObjectsInArray };
