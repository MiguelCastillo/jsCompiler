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


	$.fn.dropdownmenu = function(method)
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
			throw 'Method ' +  method + ' does not exist on jQuery dropdownmenu';
		}
	};


	$.dropdownmenu = function(options)
	{
		var instance = configure(options);
		instance.init();
		return instance.$;
	};


	$.extend( $.dropdownmenu,
	{
		// Change these values if you want to change the defaults...
		defaults:
		{
			tooth: true,
			floating: false,
			on: 'click'
		}
	});


	function configure(options)
	{
		var instance =
		{
			$: options.html || $("<div/>"),
			init: init,
			build: build,
			reload: reload,

			settings: {}
		};

		$.extend(instance.settings, options);
		instance.settings.on = options.on || $.dropdownmenu.defaults.on;
		instance.settings.floating = options.floating || $.dropdownmenu.defaults.floating;

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
		$.dropdown(this.settings);
		return this;
	};


	function reload()
	{
		return this.init();
	};


})(jQuery);

