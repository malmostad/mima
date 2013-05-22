/*
Designed and developed by:
Jakob Ebbinger
Robert Karlsson
Joakim Lundkvist
Anders Sipinen
Sandra Sosa
*/

/************************MODAL************************/
/*
The following switch statement looks at the events in a case, and opens the corresponding <div>
if the "id" is matches:: # foo.bar in slideToggle ()
Ie: it just opens the div that has both a specific "id" +. Class * /
*/

$(document).ready(function(){

$("#event-text-2.status_event_large").css('display','none'); /*döljer texten till "inkommen" statusen*/
$("#event-text-3.status_event_large").css('display','none'); /*döljer texten till "inkommen" statusen*/
$("#event-text-4.status_event_large").css('display','none'); /*döljer texten till "inkommen" statusen*/

$('.status_event_small').click(function(){ 
	var id = $(this).attr('id');
	switch(id){
	case 'event-1':
	$('#event-1_icon').toggleClass('icon-angle-down icon-2x icon-angle-up icon-2x'); /*byter pil icon vid klick*/
	$("#event-text-1.status_event_large").slideToggle();
	break;
	case 'event-2':
	$('#event-2_icon').toggleClass('icon-angle-down icon-2x icon-angle-up icon-2x'); /*byter pil icon vid klick*/
	$("#event-text-2.status_event_large").slideToggle(); /*öppnar upp .full_status div:en*/
	break;
	case 'event-3':
	$('#event-3_icon').toggleClass('icon-angle-down icon-2x icon-angle-up icon-2x'); /*byter pil icon vid klick*/
	$("#event-text-3.status_event_large").slideToggle(); /*öppnar upp .full_status div:en*/
	break;
	case 'event-4':
	$('#event-4_icon').toggleClass('icon-angle-down icon-2x icon-angle-up icon-2x'); /*byter pil icon vid klick*/
	$("#event-text-4.status_event_large").slideToggle(); /*öppnar upp .full_status div:en*/
	break;
	}
	});
});
/***************PÅGÅENDE ÄRENDEN OCH AVSLUTADE ÄRENDEN ********************************/

$(document).ready(function(){
	$('.pagaende_arende_small').click(function(){ /*vid klick på -.small_status div:en*/
	$('#pagaende_arrow').toggleClass('icon-angle-up icon-2x icon-angle-down icon-2x'); /*byter pil icon vid klick*/
	$('.pagaende_arende_large').slideToggle("slow"); 
		});
	
});

$(document).ready(function(){
		/*AVSLUTADE ÄRENDEN*/
	$('.avslutade_arenden_small').click(function(){ /*vid klick på -.small_status div:en*/
	$('#avslutade_arrow').toggleClass('icon-angle-down icon-2x icon-angle-up icon-2x'); /*byter pil icon vid klick*/
	$(".avslutade_arenden_large").slideToggle(); /*öppnar upp .full_status div:en*/
	});
});
/***************************************************************************************/
/***************************************************************************************/
/*Interactive green alert banner*/

$(document).ready(function () {
  var state = false,
    addAlert = function () {

      $('#alertTest').addClass("newInfoAlert");
      $('#alertTest').prepend('<div class="pagaende_arende_alert">Kr&auml;ver &aring;tg&auml;rd <span class="badge">!</span></div>');
    };

  removeAlert = function () {
    $('#alertTest').removeClass("newInfoAlert");
    $('#alertTest .pagaende_arende_alert').replaceWith('<div class="empty"></div>');
  };

  $("#alertTest").click(function () {
    if (!state) {
      addAlert();
    } else {
      removeAlert();
    }
    state = !state;
  });

});

$(document).ready(function(){

	if ($('#one').is('.prgr_done')){
	$(".prgr_status").text("Inkommen");
	}

	if ($('#two').is('.prgr_done')){
	$(".prgr_status").text("Behandlas");
	}

	if ($('#three').is('.prgr_done')){
	$(".prgr_status").text("Beslutad");
	}
});

$(document).ready(function() {

$('#myModal').modal(options);

});




