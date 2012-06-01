/**
* @author Miguel Castillo
*/

(function () {

    $(document).ready(function () {

        $.ajax(
        {
            url: "nav_menu.html",
            success: function (data) {
                var $menu = $(data);
                $("#nav_menu").append($menu).fadeIn(500);

                $menu.on("click", ".Home, .Gallery, .License", function (event) {

                    var $target = $(event.target);

                    if ($target.hasClass("Home") == true) {
                        $("#main_content").fadeOut(200, function () {
                            $.ajax({
                                url: "home.html",
                                cache: true,
                                dataType: "text",
                                success: function (data) {
                                    $("#main_content").html(data).fadeIn(200);
                                }
                            });
                        });
                    }
                    else if ($target.hasClass("Gallery") == true) {
                        $("#main_content").fadeOut(200, function () {
                            $.ajax({
                                url: "gallery.html",
                                cache: true,
                                dataType: "text",
                                success: function (data) {
                                    $("#main_content").html(data).fadeIn(200);
                                }
                            });
                        });
                    }
                    else if ($target.hasClass("License") == true) {
                        $("#main_content").fadeOut(200, function () {
                            $.ajax({
                                url: "license.html",
                                cache: true,
                                dataType: "text",
                                success: function (data) {
                                    $("#main_content").html(data).fadeIn(200);
                                }
                            });
                        });
                    }
                });
            },
            error: function () {
            }
        });

        $.ajax(
        {
            url: "home.html",
            success: function (data) {
                $("#main_content").append(data);
            },
            error: function () {
            }
        });

    });

})();