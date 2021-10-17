const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

//	ind = -1
//	data = new Array()
	list = null		//	new ListNode

	getUnderlyingList() {
	//	throw new NotImplementedError('Not implemented');
		return this.list;
	/*	let i = this.list;
		if( this.list != null ){
			while( i.next != null ){
				i = i.next;
			}
		}
		return i;*/
	}

	enqueue( val ) {
	//	throw new NotImplementedError('Not implemented');
		let new_list = new ListNode( val );
	/*	new_list.next = this.list;
		this.list = new_list;	*/
		if( this.list != null ){
			let i = this.list;
			while( i.next != null ){
				i = i.next;
			}
			i.next = new_list;
		}else{
			this.list = new_list;
		}
	}

	dequeue() {
	//	throw new NotImplementedError('Not implemented');
		if( this.list != null ){
			let i = this.list;
			this.list = i.next;
			return i.value;
		}
	/*	if( this.list != null ){
			let i = this.list;
			let last = null;
		//	if( i.next != null ){
			while( i.next != null ){
				last = i;
				i = i.next;
			}
		//}
			last.next = null;
			
			return i.value;
		}		*/
	}

}
