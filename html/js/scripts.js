// Avoid `console` errors in browsers that lack a console.
( function() {
  let method;
  const noop = function() {};
  const methods = [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'markTimeline',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeline',
    'timelineEnd',
    'timeStamp',
    'trace',
    'warn'
  ];
  let length = methods.length;
  const console = window.console = window.console || {};

  while ( length-- ) {
    method = methods[length];

    // Only stub undefined methods.
    if ( !console[method] ) {
      console[method] = noop;
    }
  }
} )();
if ( typeof jQuery === 'undefined' ) {
  console.warn( "jQuery hasn't loaded" );
} else {
  console.log( `jQuery ${jQuery.fn.jquery} has loaded` );
}
// Place any jQuery/helper plugins in here.
console.log( 'Hello!' );


( function( $ ) {
  $.ajaxSetup( {
    headers: {
      'X-CSRF-Token': Joomla.getOptions( 'csrf.token' )
    }
  } );
} )( jQuery );
jQuery( document ).ready( () => {
  WFMediaBox.init( {
    'base': '\/',
    'theme': 'standard',
    'mediafallback': 0,
    'mediaselector': 'audio,video',
    'width': '',
    'height': '',
    'lightbox': 0,
    'shadowbox': 0,
    'icons': 1,
    'overlay': 1,
    'overlay_opacity': 0,
    'overlay_color': '',
    'transition_speed': 300,
    'close': 2,
    'scrolling': '0',
    'labels': {
      'close': 'Close',
      'next': 'Next',
      'previous': 'Previous',
      'cancel': 'Cancel',
      'numbers': '{{numbers}}',
      'numbers_count': '{{current}} of {{total}}'
    }
  } );
} );
template = 'shaper_helixultimate';
