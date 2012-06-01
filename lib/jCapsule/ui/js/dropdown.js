/**
 * @author MiguelC
 */

(function($)
{
	"use strict"; // jshint ;_;

	var GlobalVariables =
	{
		instances: [],
		pendingInstance: null
	};


	$.fn.dropdown = function(method)
	{
		var methods =
		{
			init: function(options)
			{
				return this.each(function()
				{
					var $this = $(this);
					var instance = configure( $.extend({html:$this}, options) );
					instance.init();
				}).hide();
			}
		};


		if ( methods[method] != null )
		{
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if( typeof method === 'object' || method == null )
		{
			return methods["init"].apply(this, arguments);
		}
		else
		{
			throw 'Method ' +  method + ' does not exist on jQuery dropdown';
		}
	};


	$.dropdown = function(options)
	{
		var instance = configure(options);
		instance.init();
		return instance.$;
	};


	$.extend( $.dropdown,
	{
		// Change these values if you want to change the defaults...
		defaults:
		{
			tooth: true,
			on: 'click'
		},

		getInstance: function($instance, context)
		{
			var instances = [];
	
			if ( typeof $instance === 'string' )
			{
				$instance = $($instance, context);
			}
	
			if ( $instance instanceof jQuery === true )
			{
				$instance.each(function(i, el)
				{
					var $el = $(el);
					var data = $el.data('dropdown.data');
	
					if ( data != null )
						instances.push( data );
				});
			}

			return instances;
		},

		hideAll: function( )
		{
			for ( var iInstance in GlobalVariables.instances )
			{
				var instance = GlobalVariables.instances[iInstance];
	
				if ( instance !== GlobalVariables.pendingInstance )
					instance.$.hide();
			}
	
			GlobalVariables.pendingInstance = null;
		},


		//
		// These three functions (toggle, hide and show) below are used in
		// a few other UI controls such as the Context Menu...
		// They could have been anywhere, but I just decided to put them
		// here... If you move them somewhere else, just make sure it's a
		// better place... If it's equal, don't bother... :)
		//
	
		toggle: function( dropdown, event )
		{
			if ( dropdown.$.css('display') === 'none' )
				$.dropdown.show( dropdown, event );
			else
				$.dropdown.hide( dropdown, event );
		},


		hide: function( dropdown, event )
		{
			dropdown.$.hide();
			dropdown.$.trigger( "hide", [event] );
		},


		show: function( dropdown, event )
		{
			event = event || {target: dropdown.settings.at};
			var $target = $(event.target);

			dropdown.$.show();

			if ( dropdown.settings.floating === true && event.pageX && event.pageY )
			{
				dropdown.$.absolute(
					{
						of: $target,
						position: {left: event.pageX, top: event.pageY},
						offset: dropdown.settings.offset
					});
			}
			else
			{
				dropdown.$.absolute(
					{
						of: $target,
						offset: dropdown.settings.offset
					});
			}
	
			dropdown.$.trigger( "show", [event] );
		}
	});


	function configure(options)
	{
		var $dropdown = options.html || $("<div/>");

		var instance =
		{
			$: $dropdown,
			init: init,
			build: build,
			reload: reload,
			settings: {},

			// Helper functions
			toggle: function()
			{
				$.dropdown.toggle(this);
			},
			hide: function()
			{
				$.dropdown.hide(this);
			},
			show: function()
			{
				$.dropdown.show(this);
			}
		};

		$.extend(instance.settings, options);
		instance.settings.on = options.on || $.dropdown.defaults.on;
		instance.settings.floating = options.floating || false;
		return instance;
	};


	function init()
	{
		GlobalVariables.instances.push(this);
		return this.build();
	};


	function build()
	{
		if ( this.settings.at == null )
			throw "Must provide the at property";

		var _self = this;

		if ( this.settings.on === 'click' || this.settings.on === 'rclick' )
		{
			clickHandler(this);
		}
		else if ( this.settings.on == 'hover' )
		{
			hoverHandler(this);
		}
		//
		// I don't know what event a user will want to bind... But
		// we can have the menu toggle between show and hide whenever
		// the event occurs...
		else if ( typeof this.settings.at[this.settings.on] === 'function' )
		{
			// I guess we could filter out particular events we want to support,
			// but I think of prefer leaving it wide open for now. :)
			this.settings.at.on( this.settings.on, this.filter, function(event)
			{
				$.dropdown.toggle(_self, event);
			});
		}

		this.$
			.on('menu.select', function()
			{
				_self.$.hide();
			})
			.on('mousedown', function(event)
			{
				event.stopImmediatePropagation();
			});

		this.$
			.data('dropdown.data', this);

		return this;
	};


	function reload()
	{
		return this.init();
	};


	function hoverHandler( dropdown )
	{
		var hideTimer = null;
		function delayHide()
		{
			clearHideTimer();

			hideTimer = setTimeout(function()
			{
				dropdown.$.fadeOut();
			}, 500);
		};

		function clearHideTimer()
		{
			if ( hideTimer != null )
				clearTimeout( hideTimer );
			hideTimer = null;
		};

		dropdown.settings.at
			.on('mouseenter.dropdown', function(event)
			{
				clearHideTimer();
				$.dropdown.hideAll();
				$.dropdown.show(dropdown, event);
			})
			.on('mouseleave.dropdown', function()
			{
				delayHide();
			});

		dropdown.$
			.on('mouseenter', function()
			{
				clearHideTimer();
			})
			.on('mouseleave', function()
			{
				delayHide();			
			});
	};


	function clickHandler(dropdown)
	{
		dropdown.settings.at
			.on('mousedown', dropdown.settings.filter, function(event)
			{
				if ( dropdown.settings.on === 'click' && event.which === 1 )
				{
					GlobalVariables.pendingInstance = dropdown;
					$.dropdown.toggle(dropdown, event);
				}
				else if ( dropdown.settings.on === 'rclick' && event.which === 3 )
				{
					GlobalVariables.pendingInstance = dropdown;
					$.dropdown.show(dropdown, event);
				}
			});
	};


	//
	// This functionality below is used to control UI controls that need to have
	// this same behavior... Such as Context Menu... These controls are likely the
	// same a those using the visibility functions.
	//
	$(document.body)
	.on('mousedown', function(event)
	{
		$.dropdown.hideAll();
	})
	.on('keydown', function(event)
	{
		switch(event.keyCode)
		{
			case 27: // Hide all menus when pressing ESC
			{
				$.dropdown.hideAll();
				break;
			}
		}
	})
	.on('contextmenu', function(event)
	{
		event.stopImmediatePropagation();
		return false;
	});


})(jQuery);

