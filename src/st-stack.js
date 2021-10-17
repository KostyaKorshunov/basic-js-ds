const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
module.exports = class Stack {

	ind = -1
	data = new Array()

	push( el ) {
	//	throw new NotImplementedError('Not implemented');
		this.data.push( el );
		this.ind++;
		//	console.log(" === "+this.ind+" / "+this.data.length);
	}

	pop() {
	//	throw new NotImplementedError('Not implemented');
		if( this.ind > 0 ){
			const out = this.data[this.ind];
			this.data.slice(this.ind, 1);
			this.ind--;
			return out;
		}
			return undefined;
	}

	peek() {
	//	throw new NotImplementedError('Not implemented');
		if( this.ind > 0 ){
			return this.data[this.ind];
		}
			return undefined;
	}
}
