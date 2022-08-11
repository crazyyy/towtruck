/**
 * @package Helix Ultimate Framework
 * @author JoomShaper https://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2018 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or Later
*/
jQuery( ( $ ) => {
  // Stikcy Header
  if ( $( 'body' ).hasClass( 'sticky-header' ) ) {
    const header = $( '#sp-header' );

    if ( $( '#sp-header' ).length ) {
      const headerHeight = header.outerHeight();
      const stickyHeaderTop = header.offset().top;
      const stickyHeader = function() {
        const scrollTop = $( window ).scrollTop();

        if ( scrollTop > stickyHeaderTop ) {
          header.addClass( 'header-sticky' );
        } else if ( header.hasClass( 'header-sticky' ) ) {
          header.removeClass( 'header-sticky' );
        }
      };

      stickyHeader();
      $( window ).scroll( () => {
        stickyHeader();
      } );
    }

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

  // Preloader
  $( window ).on( 'load', () => {
    $( '.sp-preloader' ).fadeOut( 500, function() {
      $( this ).remove();
    } );
  } );

  //mega menu
  $( '.sp-megamenu-wrapper' ).parent()
    .parent()
    .css( 'position', 'static' )
    .parent()
    .css( 'position', 'relative' );
  $( '.sp-menu-full' ).each( function() {
    $( this ).parent()
      .addClass( 'menu-justify' );
  } );

  // Offcanvs
  $( '#offcanvas-toggler' ).on( 'click', ( event ) => {
    event.preventDefault();
    $( '.offcanvas-init' ).addClass( 'offcanvas-active' );
  } );

  $( '.close-offcanvas, .offcanvas-overlay' ).on( 'click', ( event ) => {
    event.preventDefault();
    $( '.offcanvas-init' ).removeClass( 'offcanvas-active' );
  } );

  $( document ).on( 'click', '.offcanvas-inner .menu-toggler', function( event ) {
    event.preventDefault();
    $( this ).closest( '.menu-parent' )
      .toggleClass( 'menu-parent-open' )
      .find( '>.menu-child' )
      .slideToggle( 400 );
  } );

  //Tooltip
  $( '[data-toggle="tooltip"]' ).tooltip();

  // Article Ajax voting
  $( '.article-ratings .rating-star' ).on( 'click', function( event ) {
    event.preventDefault();
    const $parent = $( this ).closest( '.article-ratings' );

    const request = {
      'option': 'com_ajax',
      template,
      'action': 'rating',
      'rating': $( this ).data( 'number' ),
      'article_id': $parent.data( 'id' ),
      'format': 'json'
    };

    $.ajax( {
      type: 'POST',
      data: request,
      beforeSend () {
        $parent.find( '.fa-spinner' ).show();
      },
      success ( response ) {
        const data = $.parseJSON( response );

        $parent.find( '.ratings-count' ).text( data.message );
        $parent.find( '.fa-spinner' ).hide();

        if ( data.status ) {
          $parent.find( '.rating-symbol' ).html( data.ratings );
        }

        setTimeout( () => {
          $parent.find( '.ratings-count' ).text( `(${data.rating_count})` );
        }, 3000 );
      }
    } );
  } );
} );
