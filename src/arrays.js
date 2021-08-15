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
}


const arrayFlat = [1, 2, 3, 2, 5];
const mutable = new Arrays( arrayFlat );
mutable.unique().shuffle().compact();

console.log( mutable.array );


export { unique };
