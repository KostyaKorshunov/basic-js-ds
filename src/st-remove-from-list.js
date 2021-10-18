const { NotImplementedError } = require('../extensions/index.js');

//const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
/*
function ListNode(x) {
	this.value = x;
	this.next = null;
}*/

module.exports = function removeKFromList( l, k ) {
	//	throw new NotImplementedError('Not implemented');
	//	let out = [];
	let out = null;
	//	console.debug("==== "+JSON.stringify(l)+" " );

	let cur = l;
	let to_out = null;
	let chk = true;
	let i = 0;
	while( chk ){
		if( cur.value != k ){
			to_out = {
				value: cur.value,
				next: null
			};
		//	console.debug("==== "+JSON.stringify( to_out )+" " );
			if( out == null ){
				out = to_out;
			}else{
				let zz = out;
				while( zz.next != null ){
					zz = zz.next;
				}
				zz.next = to_out;
			//	console.debug("==== "+JSON.stringify( out )+" " );
			}
		//	console.debug(">>> "+cur.value );
		}

		if( cur.next == null ){
			chk = false;
		}else{
			cur = cur.next;
		}

	}

	//	console.debug("====	====	==== "+JSON.stringify( out )+" " );
		return out;
}

