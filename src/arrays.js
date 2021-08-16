/* eslint-disable */

// return uniq elements from array
const unique = ( array, key ) => {
	try {
		if ( !Array.isArray( array ) ) throw new Error( "Passed param is not an Array" );
		return [...new Set( array )];
	} catch ( error ) {
		console.log( error.message );
	}
};




// @Next -------------------------
// mutable
// array.unique()
// array.unique("key")

// immutable
// let array = unique(array)
// let array = unique(array, "key")


class Arrays {
	constructor ( array ) {
		if ( !Array.isArray( array ) ) throw new Error( "Passed param is not an Array" );
		this.array = array;
	}
	shuffle () {
		this.array.sort( () => Math.random() - 0.5 );
		return this;
	}
	unique () {
		this.array = [...new Set( this.array )];
		return this;
	}
	compact () {
		this.array = this.array.filter( element => element );
		return this;
	}
	sort (key) {
		this.array = this.array.sort();
		return this;
	}
	filter (key) {
		this.array = this.array.filter( element => element === key );
	}
	  
}


const arrayFlat = [1, 2, 3, 2, 5];
const arrayObjects = [
	{ name: 'Worf', series: 'Star Trek' },
	{ name: 'Spock', series: 'Star Trek' },
	{ name: 'Luke', series: 'Star Wars' },
	{ name: 'Spock', series: 'Star Trek' }
];

const mutable = new Arrays( arrayObjects );
mutable.unique();
console.log( mutable.array );


export { unique };
