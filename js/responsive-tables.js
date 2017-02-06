// This is a lightly modified version of Zurb's responsive table script
// from: http://zurb.com/playground/projects/responsive-tables/responsive-tables.js
$(document).ready(function() {
    var switched = false;
    var updateTables = function() {
        if (($(window).width() < 767) && !switched) {
            switched = true;
            // changed the selector here from table.responsive to the more general
            // to deal with the fact that we can't put a class on the table in this module
            // because it is user generated in the editor.
            $(".feature-compare table").each(function(i, element) {
                splitTable($(element));
            });
            return true;
        } else if (switched && ($(window).width() > 767)) {
            switched = false;
            $(".feature-compare table").each(function(i, element) {
                unsplitTable($(element));
            });
        }
    };
    $(window).load(updateTables);
    $(window).bind("resize", updateTables);

    function splitTable(original) {
        original.wrap("<div class='table-wrapper' />");
        var copy = original.clone();
        copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
        copy.removeClass("responsive");
        original.closest(".table-wrapper").append(copy);
        copy.wrap("<div class='pinned' />");
        original.wrap("<div class='scrollable' />");
    }

    function unsplitTable(original) {
        original.closest(".table-wrapper").find(".pinned").remove();
        original.unwrap();
        original.unwrap();
    }
});
