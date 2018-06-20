(function() {

	app.innerHTML = '&nbsp;';

	var
	input = prompt('enter text'),
	// input = 'so you\'re thinking of changing the name of this to ticker?',
	chars = Math.floor(app.clientWidth/(44/2)),
	input = (new Array(chars).join(' ').replace(/./g, ' ') + input),
	split = input.split(''),
	interval,
	time = (0.2*1000),
	render = function() {

		var string = split.join('').replace(/ /g, '&nbsp;');
		app.innerHTML = string;

	},
	stop = window.stop = function() {

		clearInterval(interval);

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

	// console.log('input', input);
	// console.log('chars', chars);

})();
