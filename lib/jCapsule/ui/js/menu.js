/**
* @author MiguelC
*/

(function($)
{
    "use strict"; // jshint ;_;

    var Menu = jCapsule.UI.Menu = function jsMenu(options)
    {
        this.$ = options.html || $("<ul/>");
        $.extend(this.settings, Menu.defaults, options);
    };


    ///
    /// Define UI Menu inheritable methods and properties
    ///
    Menu.prototype = (function()
    {
        // Spot for closure

        return {
            constructor: Menu,
            selected: null,
            activate: function()
            {
                this.$.addClass('active');
                return this;
            },
            deactivate: function()
            {
                this.$.removeClass('active');
                return this;
            },
            toggleActive: function()
            {
                this.$.toggleClass('active');
                return this;
            },
            show: function(item)
            {
                item = Menu.getItem(item);
                item.addClass('visible');
                return this;
            },
            hide: function(item)
            {
                item = Menu.getItem(item);
                item.removeClass('visible');
                return this;
            },
            toggleShow: function(item)
            {
                item = Menu.getItem(item);
                item.toggleClass('visible');
                return this;
            },
            collapse: function()
            {
                this.$.find('.visible').removeClass('visible');
                return this;
            },
            expand: function(item)
            {
                item = Menu.getItem(item);
                this.$.addClass('active');
                item.parentsUntil(this.$, "li > ul").addClass('visible');
                return this;
            },
            select: function(item)
            {
                item = Menu.getItem(item);

                // If the item is a leaf node, then we are clear to do a selection. Otherwise
                // we need to expand all the items in the path of the selected item.
                //
                if (item.find('>ul').length === 0 && item.attr('disabled') == null && item.hasClass('divider') === false)
                {
                    this.selected = item;

                    // We need to clear the visibliy of the menu items because once there is a
                    // selection, the menu and its items should dissapear.
                    this.deactivate().collapse();

                    //
                    // If there is a callback for the selection, then call this directly,
                    // otherwise trigger a menu.select and the event propagate up the
                    // DOM event system.
                    //
                    if (typeof this.settings.select === 'function')
                    {
                        this.settings.select.call(this, item);
                    }
                    else
                    {
                        // MAKE SURE TO FIRE OFF A menu.select AND NOT A select.menu BECAUSE
                        // THEY GET MIXEd UP WITH EVENTS THAT ARE TRIGGERED BY SELECTION OF
                        // TEXT AND DROP DOWNS...
                        this.$.trigger('menu.select', [event, this, item[0]]);
                    }
                }

                return this;
            },
            breadcrum: function()
            {
                if (this.selected instanceof jQuery)
                {
                    return this.selected.parentsUntil(this.$, "li > ul");
                }

                return $();
            }
        };

    })();


    ///
    /// Define static methods and properties
    ///
    $.extend(Menu,
        (function()
        {
            return {
                defaults:
                {
                    'class': 'menu horizontal',
                    'renderTo': $("<div style='display:none;' id='__jcMenuContainer'></div>").appendTo(document.body),
                    'minWidth': 300,
                    'event': 'hover'
                },

                append: function append(parent, items)
                {
                    var $items;

                    if (items instanceof jQuery === true)
                        $items = items;
                    else
                        $items = Menu.fromJSON(items);

                    parent.append($items);
                },

                remove: function remove(parent, items)
                {
                    parent.remove(items);
                },

                fromJSON: function fromJSON(options)
                {
                    if (options != null)
                    {
                        if (options instanceof Array === true)
                            return $.tmpl(Menu.template.items, options, Menu.template.methods());
                        else if (options.items != null && options.items.length != 0)
                            return $.tmpl(Menu.template.items, options.items, Menu.template.methods(options));
                    }

                    return $();
                },

                toJSON: function toJSON($item)
                {
                    var item = $.tmplItem($item);
                    if (item)
                        return item.data;
                    return null;
                },

                getInstance: function(instance, context)
                {
                    var instances = [];

                    if (typeof instance === 'string')
                    {
                        instance = $(instance, context);
                    }

                    if (instance instanceof jQuery === true)
                    {
                        instance.each(function(i, el) {
                            var $el = $(el);
                            var data = $el.data('menu');

                            if (data != null)
                                instances.push(data);
                        });
                    }

                    return instances;
                },

                getItem: function(item)
                {
                    if (item instanceof jQuery === true)
                    {
                        // We have a jQuery object, we are good to continue.  We could add
                        // some checks in here to verify that the item being selected is a
                        // child of the menu... But for now I think we don't need it.
                    }
                    else if (typeof item === 'string')
                    {
                        var $item = $(item);
                        if ($item.length === 0)
                            throw "Parameter must be a valid jQuery selector";
                        item = $item;
                    }
                    else
                    {
                        throw "Item must be a valid jQuery object or selector";
                    }

                    return item;
                },

                template:
                {
                    menu: $("<div><ul>{{tmpl($item.getItems()) 'menuItems'}}</ul></div>").template('menu'),
                    items: $("<div>{{if $item.isDivider()}}{{tmpl($item.data) 'menuDivider'}}{{/if}}{{if $item.isItem()}}{{tmpl($item.data) 'menuItem'}}{{/if}}</div>").template('menuItems'),
                    item: $("<div><li><a href='javascript:void(0)'>{{html $item.getText()}}</a>{{if $item.hasItems()}}{{tmpl() 'menu'}}{{/if}}</li></div>").template('menuItem'),
                    divider: $("<div><li class='divider horizontal'>&nbsp</li></div>").template('menuDivider'),
                    expander: $("<div><div class='expander displayInline positionRight'>+</div></div>").template('menuExpander'),

                    methods: function(options)
                    {
                        options = options || { };

                        function getType()
                        {
                            return this.data.type || 'item';
                        }

                        function isDivider()
                        {
                            return this.getType() === 'divider';
                        }

                        function isItem()
                        {
                            return this.getType() === 'item';
                        }

                        function hasItems()
                        {
                            return this.getItems().length != 0;
                        }

                        function getItems()
                        {
                            var items = null;

                            if (typeof options['getItems'] === 'function')
                                items = options['getItems'].call(this, this.data);

                            return items || this.data.items || [];
                        }

                        function getText()
                        {
                            var text = null;

                            if (typeof options['getText'] === 'function')
                                text = options['getText'].call(this, this.data);

                            return text || this.data.text || '';
                        }

                        return {
                            getType: getType,
                            isDivider: isDivider,
                            isItem: isItem,
                            hasItems: hasItems,
                            getItems: getItems,
                            getText: getText
                        };
                    }
                }
            };
        })()
    );

})(jQuery);


/**
* jQuery interface.
*/
(function($)
{
    "use strict"; // jshint ;_;

    $.fn.jcMenu = function(method)
    {
        var methods =
        {
            init: function(options)
            {
                options = options || { };

                return this.each(function() {
                    var $this = $(this);
                    var instance = new Menu($.extend({ html: $this }, options));
                    build.call(instance);
                });
            }
        };

        if (methods[method] != null)
        {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || method == null)
        {
            return methods["init"].apply(this, arguments);
        }
        else
        {
            throw 'Method ' + method + ' does not exist on jQuery menu';
        }
    };

    $.jcMenu = function(options)
    {
        var instance;
        if (options instanceof jQuery)
        {
            instance = jCapsule.UI.Menu.getInstance(options);
            if (instance.lenght != 0)
                return instance;
        }
        instance = new Menu($.extend({ items: [] }, options));
        build.call(instance);
        return instance.$;
    };

    function build()
    {
        var capsule = this,
            $menu = this.$,
            settings = this.settings;

        //
        // Handle main menu and submenu events.
        //
        $menu.addClass(settings['class'])
            .data('menu', capsule)
            .on(jCapsule.Events.Click, '.menu.active ul > li', function(event)
            {
                event.stopPropagation();
                capsule.select($(this));
            })
            .on(jCapsule.Events.Mouse.Enter, '.menu.active > li, .menu.active ul > li', function (event)
            {
                capsule.show($(this).find("> ul"));
            })
            .on(jCapsule.Events.Mouse.Leave, '.menu.active > li, .menu.active ul > li', function (event)
            {
                capsule.hide($(this).find("> ul"));
            })
            .on(jCapsule.Events.Mouse.Down, function (event)
            {
                event.stopImmediatePropagation();
            });

        //
        // Events for activating/deactivating the menu, which directly affects
        // whether or not submenu can be displayed and can recieve events.
        //
        switch (settings.event)
        {
            case jCapsule.Events.Hover:
            {
                $menu.on(jCapsule.Events.Mouse.Enter, '.menu > li', function (event)
                    {
                        capsule.activate().show($(this).find('>ul'));
                    })
                    .on(jCapsule.Events.Mouse.Leave, '.menu.active > li', function (event)
                    {
                        capsule.deactivate().hide($(this).find('>ul'));
                    });
                break;
            }
            case jCapsule.Events.RightClick:
            {
                $menu.on(jCapsule.Events.Mouse.Down, '.menu > li', function (event)
                {
                    if (event.which === 3)
                    {
                        capsule.activate().show($(this).find('>ul'));
                    }
                });
                break;
            }
            default:
            {
                $menu.on(jCapsule.Events.Click, '.menu > li', function (event)
                {
                    capsule.collapse().toggleActive().toggleShow($(this).find('>ul'));
                });
                break;
            }
        }

        Menu.append($menu, settings.items);
        return this;
    }

})(jQuery);

