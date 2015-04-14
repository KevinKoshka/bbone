var ListView = Backbone.View.extend({
	el: $('body'),

	events:{
		"click button": "addItem"
	},
	initialize: function(){
		console.log(_.bindAll(this, 'render', 'addItem'));
		_.bindAll(this, 'render', 'addItem');

		this.counter = 0;
		this.render();
	},
	render: function(){
		$(this.el).append("<button>Touch</button>");
		$(this.el).append("<ul></ul>");
	},
	addItem: function(){
		this.counter++;
		$(this.el).append("<li>" + this.counter + " Hello World!</li>");
	}
});

var listView = new ListView();