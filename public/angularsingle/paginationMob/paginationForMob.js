// JavaScript source code




    // Returns an array of maxLength (or less) page numbers
    // where a 0 in the returned array denotes a gap in the series.
    // Parameters:
    //   totalPages:     total number of pages
    //   page:           current page
    //   maxLength:      maximum size of returned array
    function getPageList(totalPages, page, maxLength) {
            if (maxLength < 4) throw "maxLength must be at least 5";

            function range(start, end) {
                return Array.from(Array(end - start + 1), (_, i) => i + start);
}

            var sideWidth = maxLength < 8 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
            if (totalPages <= maxLength) {
                // no breaks in list
                return range(1, totalPages);
}
            if (page <= maxLength - sideWidth - 1 - rightWidth) {
                // no break on left of page
                return range(1, maxLength - sideWidth - 1)
        .concat(0, range(totalPages - sideWidth + 1, totalPages));
}
            if (page >= totalPages - sideWidth - 1 - rightWidth) {
                // no break on right of page
                return range(1, sideWidth)
        .concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
}
// Breaks on both sides
return range(1, sideWidth)
    .concat(0, range(page - leftWidth, page + rightWidth),
        0, range(totalPages - sideWidth + 1, totalPages));
}





// Below is an example use of the above function.
        $(function () {
            // Number of items and limits the number of items per page
            var numberOfItems = $("#jar1 .content").length;
    var limitPerPage = 3;
    // Total pages rounded upwards
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    // Number of buttons at the top, not counting prev/next,
    // but including the dotted buttons.
    // Must be at least 5:
    var paginationSize =5;
    var currentPage;

            function limit() {

                if (numberOfItems <= limitPerPage) {
        $("#jar1").css("display", "block");
    $(".mpagination").hide();
                } else {
        $(".mpaginaition").show();
    }
}
limit();


            function showPage(whichPage) {
                if (whichPage < 1 || whichPage > totalPages) return false;
    currentPage = whichPage;
    $("#jar1 .content").hide()
        .slice((currentPage - 1) * limitPerPage,
            currentPage * limitPerPage).show();
    // Replace the navigation items (not prev/next):
    $(".mpagination li").slice(1, -1).remove();
                getPageList(totalPages, currentPage, paginationSize).forEach(item => {
        $("<li>").addClass("page-item1")
            .addClass(item ? "current-page1" : "disabled")
            .toggleClass("active", item === currentPage).append(
                $("<a>").addClass("page-link1").attr({
                    href: "javascript:void(0)"
                }).text(item || "...")
            ).insertBefore("#next-page1");
    });
    console.log("mpagination")
    // Disable prev/next when at first/last page:
    $("#previous-page1").toggleClass("disabled", currentPage === 1);
    $("#next-page1").toggleClass("disabled", currentPage === totalPages);
    return true;
}

// Include the prev/next buttons:
$(".mpagination").append(
                $("<li>").addClass("page-item1").attr({id: "previous-page1" }).append(
                    $("<a>").addClass("page-link1").attr({
            href: "javascript:void(0)"
        }).text("Prev")
    ),
                $("<li>").addClass("page-item1").attr({id: "next-page1" }).append(
                    $("<a>").addClass("page-link1").attr({
                    href: "javascript:void(0)"
                }).text("Next")
            )
        );
        // Show the page links
        $("#jar1").show();
        showPage(1);

        // Use event delegation, as these items are recreated later
            $(document).on("click", ".mpagination li.current-page1:not(.active)", function () {
                return showPage(+$(this).text());
                });
            $("#next-page1").on("click", function () {
                return showPage(currentPage + 1);
                });
    
            $("#previous-page1").on("click", function () {
                return showPage(currentPage - 1);
                });
            });
    
    
    
    
    
    

