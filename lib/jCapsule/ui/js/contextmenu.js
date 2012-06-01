/**
 * @author MiguelC
 * 
 * - Context menu is very interesting and flexible UI control...  I basically
 * created this control so that I can display a menu when user defined or
 * default events occur.  The default event is right clicking, as normal
 * context menus behave.  But you can also configure if a regular click or
 * even a hover will show or hide the context menu.
 * 
 */

(function($)
{
	"use strict"; // jshint ;_;

	$.fn.contextmenu = function(method)
	{
		var methods =
		{
			init: function(options)
			{
				var menus = [];

				this.each(function()
				{
					options.tooth = options.tooth || $.contextmenu.defaults.tooth;
					var $menu = $(this).menu(options).hide();
					var instance = configure( $.extend({html:$menu}, options) );
					instance.init();
					menus.push($menu[0]);
				});

				return $(menus);
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
			throw 'Method ' +  method + ' does not exist on jQuery context menu';
		}
	};


	$.contextmenu = function()
	{
	};


	// Change these values if you want to change the defaults...
	$.extend ( $.contextmenu,
	{
		defaults:
		{
			tooth: true,
			floating: false,
			on: 'rclick'
		}
	});


	function configure(options)
	{
		var instance =
		{
			html: options.html || $("<div/>"),
			init: init,
			build: build,
			reload: reload,
			settings: {}
		};

		$.extend(instance.settings, options);

		instance.settings.on = options.on || $.contextmenu.defaults.on;
		instance.settings.floating = options.floating || $.contextmenu.defaults.floating;

		if ( instance.settings.floating === true && options.tooth === true )
			instance.settings.offset = {top: 0, left: -18};

		return instance;
	};


	function init()
	{
		return this.build();
	};


	function build()
	{
		if ( this.settings.at == null )
			throw "Must provide the at property";
		$.dropdown(this.settings);
		return this;
	};


	function reload()
	{
		return this.init();
	};


})(jQuery);

