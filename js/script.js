$(document).on( 'DOMMouseScroll mousewheel', function ( event, delta ) {
// Abfrage ob runter gescrollt wird
if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
  // alternative options for wheelData: wheelDeltaX & wheelDeltaY
  // Anzeige 'Down' in der Console
  console.log('Down');

  $('body').addClass('changeColor');
}

// wenn hoch gescrollt wird
else {
  // Anzeige 'Up' in der Console
  console.log('Up');

  $('body').removeClass('changeColor');}

// prevent page fom scrolling
return false;
});

function fontsizeresp() {
	 brwsWidth = document.body.offsetWidth;
	 textsize = brwsWidth / 1040;
	 if (textsize <= 0.75) {
		 textsize = 0.75;
	 }
	 document.body.style.fontSize = ''+ textsize +'em';
}
