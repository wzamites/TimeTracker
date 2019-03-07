//--This Jawn is the scrolling function

jQuery.fn.scrollTo = function(elem, speed) { 
    $(this).animate({
        scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top 
    }, speed == undefined ? 1000 : speed); 
    return this; 
};

//--This jawn is what happens when you hover over the project titles on the left

$('.projectblock').mouseover(
    function(){
    $(".projectblock").removeClass("selected");
    $(this).addClass("selected");
    }
);

$("#generalproject").mouseover(
    function(){
        $(".taskscontainer").removeClass("taskshover");
        $("#generalcontainer").addClass("taskshover");
        $("#firefoxscrollcontainer").scrollTo("#generalcontainer", 0); //custom animation speed 

    }
);

$("#proj1").mouseover(
    function(){
        $(".taskscontainer").removeClass("taskshover");
        $("#proj1container").addClass("taskshover");
        $("#firefoxscrollcontainer").scrollTo("#proj1container", 0); //custom animation speed 

    }
);

$("#proj2").mouseover(
    function(){
        $(".taskscontainer").removeClass("taskshover");
        $("#proj2container").addClass("taskshover");
        $("#firefoxscrollcontainer").scrollTo("#proj2container", 0); //custom animation speed 
    }
);

$("#proj3").mouseover(
    function(){
        $(".taskscontainer").removeClass("taskshover");
        $("#proj3container").addClass("taskshover");
        $("#firefoxscrollcontainer").scrollTo("#proj3container", 0); //custom animation speed 

    }
);

$("#proj4").mouseover(
    function(){
        $(".taskscontainer").removeClass("taskshover");
        $("#proj4container").addClass("taskshover");
        $("#firefoxscrollcontainer").scrollTo("#proj4container", 0); //custom animation speed 

    }
);

$("#proj5").mouseover(
    function(){
        $(".taskscontainer").removeClass("taskshover");
        $("#proj5container").addClass("taskshover");
        $("#firefoxscrollcontainer").scrollTo("#proj5container", 0); //custom animation speed 

    }
);


//----This Jawn is what happens when you hover over the task section on the right

$('.taskscontainer').mouseover(
    function(){
    $(".taskscontainer").removeClass("taskshover");
    $(this).addClass("taskshover");
    }
);


$("#generalcontainer").mouseover(
    function(){
        $(".projectblock").removeClass("selected");
        $("#generalproject").addClass("selected");
    }
);

$("#proj1container").mouseover(
    function(){
        $(".projectblock").removeClass("selected");
        $("#proj1").addClass("selected");
    }
);


$("#proj2container").mouseover(
    function(){
        $(".projectblock").removeClass("selected");
        $("#proj2").addClass("selected");
    }
);

$("#proj3container").mouseover(
    function(){
        $(".projectblock").removeClass("selected");
        $("#proj3").addClass("selected");
    }
);

$("#proj4container").mouseover(
    function(){
        $(".projectblock").removeClass("selected");
        $("#proj4").addClass("selected");
    }
);

$("#proj5container").mouseover(
    function(){
        $(".projectblock").removeClass("selected");
        $("#proj5").addClass("selected");
    }
);
