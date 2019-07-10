$(".block").draggable({
  cursor: "grabbing",
  helper: function() {
    return $(this).clone().appendTo("#body").addClass("draggingblock").removeClass("block");
  },
  scroll: true,
  scrollSensitivity: 1,
  //cursorAt: {left:$('.draggingblock').width()/20},
  //revert: "invalid",
  snap: ".time-row",
  snapMode: "inner",
  //start: function() {$( this ).css('opacity', '0')},
  start: function(event, ui) {
    $(this).draggable('instance').offset.click = {
      left: Math.floor(ui.helper.width() / 2),
      top: Math.floor(ui.helper.height() / 2)
    };
  },

  drag: function() {
    let offsetdrag = $(".draggingblock").offset();
    let offsetrow = $(".calendardrop").offset();
    xPos = 24 * Math.round((offsetdrag.left - offsetrow.left) / 24);
    yPos = 42 * Math.round((offsetdrag.top - offsetrow.top) / 42);
  },
  //stop: function() {$( this ).css('opacity', '1')},
});

$(".time-row").droppable({
  accept: ".block",
  tolerance: "fit",
  drop: function(event, ui) {
    ui.draggable.clone().appendTo($(this).parent()).addClass("droppedblock").removeClass("block").css('left', xPos).css('top', yPos).draggable({
      snap: ".time-row",
      snapMode: "inner",
      grid: [24, 42],
      containment: ".calendardrop",
    }).resizable({
      grid: [24],
      handles: 'e, w',
      containment: "parent",
    });
  }
});

//deletes the dropped div on the click
$('.calendardrop').on('click', '.x', function() {
  $(this).closest('.droppedblock').remove();
});

//this tooltips it out
