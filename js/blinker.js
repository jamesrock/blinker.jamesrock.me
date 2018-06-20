(function() {

	app.innerHTML = '&nbsp;';

	var
	// input = prompt('enter text'),
	input = 'so you\'re thinking of changing the name of this to ticker?',
	chars = Math.floor(app.clientWidth/(46/2)),
	input = (new Array(chars).join(' ').replace(/./g, ' ') + input),
	split = input.split(''),
	interval,
	time = (0.2*1000),
	render = function() {

		app.innerHTML = split.join('').replace(/ /g, '&nbsp;');
		split.push(split.shift());

	},
	stop = window.stop = function() {

		clearInterval(interval);

	},
	start = window.start = function() {

		interval = setInterval(function() {

			render();

		}, time);

	};

	/*

	why hello, my name is james!
	you're a complete idiot!
	so you're thinking of changing the name of this to ticker?

	*/

	start();

	// console.log('input', input);
	// console.log('chars', chars);

})();
