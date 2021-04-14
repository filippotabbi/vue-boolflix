
$('#feat-info').mouseover(function() {
    $('.about').stop(true, true).hide(400);
    $('.help').stop(true, true).hide(400);
    $('.plans').stop(true, true).hide(400);
    $('.features').stop(true, true).show(400);
}).mouseout(function() {
    $('.features').stop(true, true).show(400);
});
$('html').click(function() {
    $('.features').stop(true, true).hide(400);
});
