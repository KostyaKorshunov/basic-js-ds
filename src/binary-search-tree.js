const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

	main = null

	root() {
	//	throw new NotImplementedError('Not implemented');
		return this.main;
	}

	add( data ) {
	//	throw new NotImplementedError('Not implemented');
		if( this.main == null ){
			this.main = new Node( data );
		}else{
			let chk = true;
			let cur = this.main;
			while( chk ){
				if( cur.data == data ){
					chk = false;
				}else if( cur.data < data ){		//right
					if( cur.right == null ){
						let nw = new Node( data );
						cur.right = nw;
						chk = false;
					}else{
						cur = cur.right;
					}
				}else if( cur.data > data ){		//left
					if( cur.left == null ){
						let nw = new Node( data );
						cur.left = nw;
						chk = false;
					}else{
						cur = cur.left;
					}

				}
			}
		}
	}

	has(/* data */) {
	//	throw new NotImplementedError('Not implemented');
	
	}

	find(/* data */) {
	//	throw new NotImplementedError('Not implemented');
	
	}

	remove(/* data */) {
	//	throw new NotImplementedError('Not implemented');
	
	}

	min() {
	//	throw new NotImplementedError('Not implemented');
		if( this.main != null ){
			let chk = true;
			let cur = this.main;
			while( chk ){
				if( cur.left == null ){
					return cur.data;
				}else{
					cur = cur.left;
				}
			}
		}
		return null;
	}

	max() {
	//	throw new NotImplementedError('Not implemented');
		if( this.main != null ){
			let chk = true;
			let cur = this.main;
			while( chk ){
				if( cur.right == null ){
					return cur.data;
				}else{
					cur = cur.right;
				}
			}
		}
		return null;
	}

}