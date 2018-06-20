(function() {

	app.innerHTML = '&nbsp;';

	var
	inputs = {
		user: function() {
			return prompt('enter text');
		},
		test1: function() {
			return 'so you\'re thinking of changing the name of this to ticker?';
		},
		test2: function() {
			return 'why hello, my name is james!';
		},
		test3: function() {
			return 'you\'re a complete idiot!';
		}
	},
	input = inputs.user(),
	chars = Math.floor(app.clientWidth/(88/2)),
	input = (new Array(chars).join(' ').replace(/./g, ' ') + input),
	split = input.split(''),
	interval,
	time = (0.15*1000),
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

	start();

	// console.log('time', time);
	// console.log('input', input);
	console.log('chars', chars);

})();
