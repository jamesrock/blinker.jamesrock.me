(function() {

	// console.log('bob', app.clientHeight/app.clientWidth);

	var
	input = prompt('enter text'),
	input = (input.replace(/./g, ' ') + input),
	split = input.split(''),
	interval,
	time = (0.2*1000),
	render = function() {
		var string = split.join('').replace(/ /g, '&nbsp;');
		app.innerHTML = string;
	};

	/*

	why hello, my name is james!
	you're a complete idiot!
	so you're thinking of changing the name of this to ticker?

	*/

	interval = setInterval(function() {

		render();
		split.push(split.shift());

	}, time);

	// clearInterval(interval);

	// console.log('input', input);

})();
