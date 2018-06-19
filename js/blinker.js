(function() {

	var
	input = (prompt('enter text') + ' '),
	split = input.split(''),
	interval,
	time = (0.2*1000),
	render = function() {
		app.innerHTML = split.join('').replace(/ /g, '&nbsp;');
	};

	/*

	why hello, my name is james!
	you're a complete idiot!

	*/

	interval = setInterval(function() {

		render();
		split.unshift(split.pop());

	}, time);

	// console.log('input', input);

})();
