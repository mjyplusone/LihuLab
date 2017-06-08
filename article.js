(function() {
    var spans= $(".left li.nav-item").click(function(){ 
            $(this).siblings('li').removeClass('selected');  
            $(this).addClass("selected");        
        });  
    // $("li.nav-item a[href='" + location.href.substring(location.href.lastIndexOf("/") + 1) + "']").parent('li').addClass("selected");
})();
