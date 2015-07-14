const pluralize = require( 'plur' );
const assert = require( 'assert' );

module.exports = function friendsStayed( friends ) {
	// throw if not sent an array
	assert( Array.isArray( friends ), '`friends` must be an array' );

	// if Empty, return empty string
	if ( !friends.length ) return '';

	// Take the first 2
	var stayed = friends.slice( 0, 2 );

	// If there are only 2, just use and
	if ( friends.length === 2 ) {
		stayed.splice( 1, 0, 'and' );
		// If there are more than 2 friends, use a comma
	} else if ( friends.length > 2 ) {
		// add a comma to the first name
		stayed[ 0 ] = stayed[ 0 ] + ',';

		// add an 'and' after the names, the number and the appropriate noun
		stayed.push( 'and', friends.length - 2, 'other', pluralize( 'friend', friends.length - 2 ) );
	}

	// Add the appropriate word
	stayed.push( pluralize( 'has', 'have', friends.length ) );

	// Add the rest of the sentence
	stayed.push( 'stayed', 'here' );

	return stayed.join( ' ' );
};
