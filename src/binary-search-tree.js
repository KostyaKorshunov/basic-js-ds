const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

	main = null
//	to_insert = null

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
			let t_st = "";
			while( chk ){
			//	t_st += "_"+cur.data;
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

		//	console.debug("+++ "+t_st+"_"+data );
		}
	}

	has( data ) {
	//	throw new NotImplementedError('Not implemented');
		if( this.find( data ) === null )
		{
			return false;
		}else{
			return true;
		}
	}

	find( data ) {
	//	throw new NotImplementedError('Not implemented');
		if( this.main != null ){
			let chk = true;
			let cur = this.main;
			let t_st = "<<"+data;
			while( chk ){
			//	t_st += ">> "+cur.data+" ";
				if( cur.data == data ){
					//	console.debug(""+t_st );
					return cur;
					
				}else if( cur.data < data ){		//right
					if( cur.right == null ){
					//	console.debug(""+t_st+">>null" );
						return null;
					//	chk = false;
					}else{
						cur = cur.right;
					}
				}else if( cur.data > data ){		//left
					if( cur.left == null ){
					//	console.debug(""+t_st+">>null" );
						return null;
					//	chk = false;
					}else{
						cur = cur.left;
					}
				}
			}
		}else{
			return null;
		}
	}

	remove( data ) {
	//	throw new NotImplementedError('Not implemented');
		if( !this.has(data) ){		return false;	}
		//	console.debug("======== 	remove=	"+data );
		if( this.main != null ){
			let chk = true;
			let cur = this.main;
			if( cur.data == data ){
				if( cur.left == null && cur.right == null ){
					this.main = null;
					return this.main;
				}else if( cur.left == null ){
					this.main = cur.right;
					return this.main;
				}else if( cur.right == null ){
					this.main = cur.left;
					return this.main;
				}else{
					let to_in = this.to_min( cur.right );
					to_in.left = cur.left;
					this.main = cur.right;
					//	this.has( data );
					return this.main;
				}
			//	console.debug(">>>> main = "+data);
			//	++++	++++
			}else{
			while( chk ){
				if( cur.left == null && cur.right == null ){
					return null;

				}else if( cur.right != null && cur.right.data == data ){
					if( this.for_remove("right", cur ) ){
						return true;
					}
				}else if( cur.left != null && cur.left.data == data ){
					if( this.for_remove("left", cur ) ){
						return true;
					}
				}else{
				//++++++++++
				if( cur.data == data ){
					//	return cur;
						chk = false;
				}else if( cur.data < data ){		//right
					if( cur.right == null ){
					//	return null;
						chk = false;
					}else{
						cur = cur.right;
					}
				}else if( cur.data > data ){		//left
					if( cur.left == null ){
					//	return null;
						chk = false;
					}else{
						cur = cur.left;
					}
				}
				//++++++++++
				}
			}	//end while
			//	++++	++++
			}
		//	console.debug(">>>> cur= "+cur.data );
		}
	}
//=============================
	for_remove( l_r, par ){
		if( l_r == "left" ){
			let cur = par.left;

			if( cur.left == null && cur.right == null ){
				par.left = null;
				return true;

			}else if( cur.left == null ){
				par.left = cur.right;
				return true;

			}else if( cur.right == null ){
				par.left = cur.left;
				return true;

			}else{
				let to_in = this.to_min( cur.right );
				to_in.left = cur.left;
				par.left = cur.right;
				return true;

			}
		//+++++++++++++++++++++++++++++++++++++++
		}else if( l_r == "right" ){
			let cur = par.right;

			if( cur.left == null && cur.right == null ){
				par.right = null;
				return true;

			}else if( cur.left == null ){
				par.right = cur.right;
				return true;

			}else if( cur.right == null ){
				par.right = cur.left;
				return true;

			}else{
				let to_in = this.to_min( cur.right );
				to_in.left = cur.left;
				par.right = cur.right;
				return true;

			}
		//+++++++++++++++++++++++++++++++++++++++
		}
		return false;
	}
	to_min( mn ){
		if( mn != null ){
			let chk = true;
			let cur = mn;
			while( chk ){
				if( cur.left == null ){
					return cur;
				}else{
					cur = cur.left;
				}
			}
		}
		return null;
	}
//===============================================================================
	min() {
	//	throw new NotImplementedError('Not implemented');
		if( this.main != null ){
			let chk = true;
			let cur = this.main;
			let t_st = ""
			while( chk ){
				//	t_st += " .. "+cur.data;
				if( cur.left == null ){
				//	console.debug("> "+t_st );
					return cur.data;
				}else{
					cur = cur.left;
				}
			}
		}
		return null;
	}
//===============================================
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
//===============================================================================
}