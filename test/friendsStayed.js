const expect = require('chai').expect;

describe( 'Friends stayed', function () {

	const friendsStayed = require( '../lib/friendsStayed' );

	const friends = [
		'Barney Jekyll',
		'Bubba Hyde',
		'Betsy Toheavens',
		'Does not matter'
	];

	it( 'should throw when not given an argument', function () {
		expect( friendsStayed ).to.throw('`friends` must be an array');
	} );

	it( 'should throw when given something other than array', function () {
		// Test wrong type of argument
		expect( friendsStayed.bind( null, 'test' ) ).to.throw('`friends` must be an array');
	} );

	it( 'should return empty string with no friends :(', function () {
        /* jshint -W030 */
		expect( friendsStayed( [] ) ).to.be.empty;
	} );

	it( 'should return the correct string for 1 friend', function () {
		expect( friendsStayed( friends.slice( 0, 1 ) ) ).to.equal( 'Barney Jekyll has stayed here' );
	} );

	it( 'should return the correct string for 2 friends', function () {
		expect( friendsStayed( friends.slice( 0, 2 ) ) ).to.equal( 'Barney Jekyll and Bubba Hyde have stayed here' );
	} );

	it( 'should return the correct string for 3 friends', function () {
		expect( friendsStayed( friends.slice( 0, 3 ) ) ).to.equal( 'Barney Jekyll, Bubba Hyde and 1 other friend have stayed here' );
	} );

	it( 'should return the correct string for 4 friends', function () {
		expect( friendsStayed( friends.slice( 0, 4 ) ) ).to.equal( 'Barney Jekyll, Bubba Hyde and 2 other friends have stayed here' );
	} );
} );
