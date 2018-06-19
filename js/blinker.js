(function() {

	var
	input = prompt('enter text'),
	input = input.replace(/ /g, ' '),
	split = input.split(''),
	interval,
	time = (0.5*1000),
	render = function() {
		app.innerHTML = split.join('');
	};

	/*

	why hello, my name is james!

	*/

	interval = setInterval(function() {

		// console.log(split);
		render();
		split.unshift(split.pop());

	}, time);

	console.log('input', input);

})();
