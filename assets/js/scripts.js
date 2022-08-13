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
jQuery( ( $ ) => {
  // Stikcy Header
  if ( $( 'body' ).hasClass( 'sticky-header' ) ) {
    const header = $( '#sp-header' );

    if ( $( 'body' ).hasClass( 'layout-boxed' ) ) {
      const windowWidth = header.parent().outerWidth();

      header.css( {
        'max-width': windowWidth,
        'left': 'auto'
      } );
    }
  }

  // go to top
  $( window ).scroll( function() {
    if ( $( this ).scrollTop() > 100 ) {
      $( '.sp-scroll-up' ).fadeIn();
    } else {
      $( '.sp-scroll-up' ).fadeOut( 400 );
    }
  } );

  $( '.sp-scroll-up' ).click( () => {
    $( 'html, body' ).animate( {
      scrollTop: 0
    }, 600 );

    return false;
  } );
} );

jQuery( ( $ ) => {
  ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i ).test( navigator.userAgent ) ? ( $( '.sppb-addon-sppb-flibox .sppb-flipbox-panel, .threeD-flipbox .threeD-content-wrap' ).on( 'mouseover', function( e ) {
    $( this ).toggleClass( 'flip' );
  } ),
  $( document ).on( 'mouseenter', '.sppb-addon-sppb-flibox .sppb-flipbox-panel, .threeD-flipbox .threeD-content-wrap', function( e ) {
    $( this ).addClass( 'flip' );
  } ),
  $( document ).on( 'mouseleave', '.sppb-addon-sppb-flibox .sppb-flipbox-panel, .threeD-flipbox .threeD-content-wrap', function( e ) {
    $( this ).removeClass( 'flip' );
  } ) ) : ( $( document ).on( 'click', '.sppb-addon-sppb-flibox.flipon-click .sppb-flipbox-panel, .threeD-flipbox.flipon-click .threeD-content-wrap', function( e ) {
    $( this ).toggleClass( 'flip' );
  } ),
  $( document ).on( 'mouseenter', '.sppb-addon-sppb-flibox.flipon-hover .sppb-flipbox-panel, .threeD-flipbox.flipon-hover .threeD-content-wrap', function() {
    $( this ).addClass( 'flip' );
  } ),
  $( document ).on( 'mouseleave', '.sppb-addon-sppb-flibox.flipon-hover .sppb-flipbox-panel, .threeD-flipbox.flipon-hover .threeD-content-wrap', function() {
    $( this ).removeClass( 'flip' );
  } ) );
} );
