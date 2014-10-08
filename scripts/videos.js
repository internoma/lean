// JavaScript Document




var video01='<iframe width="100%"  src="http://tv.unir.net/embedc.php?video=3924&ap=1" frameborder="0" allowfullscreen allowTransparency="true" class="modal-iframe"></iframe>';

var video02='<iframe width="100%" src="http://tv.unir.net/embedc.php?video=3700&ap=1" frameborder="0" allowfullscreen allowTransparency="true" class="modal-iframe"></iframe>';

var video03='<iframe width="100%" src="http://tv.unir.net/embedc.php?video=3855&ap=1" frameborder="0" allowfullscreen allowTransparency="true" class="modal-iframe"></iframe>';

var video04='<iframe width="100%" src="http://tv.unir.net/embedc.php?video=5867&ap=1" frameborder="0" allowfullscreen allowTransparency="true" class="modal-iframe"></iframe>';


var video05='<iframe width="100%" src="http://tv.unir.net/embedc.php?video=3507&ap=1" frameborder="0" allowfullscreen allowTransparency="true" class="modal-iframe"></iframe>';


var video07='<iframe width="100%" src="http://tv.unir.net/embedc.php?video=3856&ap=1" frameborder="0" allowfullscreen allowTransparency="true" class="modal-iframe"></iframe>';




var llenaDiv1 = function() {
   $('div.modal-body').html(video01);


};
var llenaDiv2 = function() {
    $('div.modal-body').html(video02);
};

var llenaDiv3 = function() {
    $('div.modal-body').html(video03);
};

var llenaDiv4 = function() {
    $('div.modal-body').html(video04);
};
var llenaDiv5 = function() {
    $('div.modal-body').html(video05);
};
var llenaDiv7 = function() {
    $('div.modal-body').html(video07);
};


var vaciaDiv = function(){
    $('div.modal-body').html("");
    $('close').html("");

};

$('#boton-verVideo1').click(llenaDiv1);
$('#boton-verVideo2').click(llenaDiv2);
$('#boton-verVideo3').click(llenaDiv3);
$('#boton-verVideo4').click(llenaDiv4);
$('#boton-verVideo5').click(llenaDiv5);
$('#boton-verVideo6').click(llenaDiv7);
$('.close').click(vaciaDiv);



$('.modal').on('hidden',function(){var video=$(this).html();$(this).html("");});
