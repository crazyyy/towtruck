if ( typeof contactus_module_id !== 'undefined' ) {
  var uploads_counter = uploads_counter || [];
  var form_ids = form_ids || [];

  form_ids.push( contactus_module_id );
  uploads_counter[contactus_module_id] = 0;

  function contactus_validate ( element ) {
    const inputs = element.getElementsByClassName( 'contactus-fields' ),
      errorMessages = element.getElementsByClassName( 'contactus-error-message' );

    for ( var i = errorMessages.length; i > 0; i-- ) {
      errorMessages[i - 1].parentNode.removeChild( errorMessages[i - 1] );
      console.log( i );
    }

    for ( var i = 0; i < inputs.length; i++ ) {
      if ( inputs[i].hasAttribute( 'required' ) && inputs[i].value.length == 0 ) {
        event.preventDefault();
        parent = inputs[i].parentNode;
        parent.insertAdjacentHTML( 'beforeend', `<div class='contactus-error-message'>${
          type_field
        }</div>` );
        console.log( `ad${i}` );
      }
    }
  }

  function joomly_analytics ( mod_id ) {
    if ( contactus_params[mod_id].yandex_metrika_id ) {
      const yaCounter = new Ya.Metrika( contactus_params[mod_id].yandex_metrika_id );

      yaCounter.reachGoal( contactus_params[mod_id].yandex_metrika_goal );
    }
    if ( contactus_params[mod_id].google_analytics_category ) {
      ga( 'send', 'event', contactus_params[mod_id].google_analytics_category, contactus_params[mod_id].google_analytics_action, contactus_params[mod_id].google_analytics_label, contactus_params[mod_id].google_analytics_value );
    }
  }

  function contactus_uploader ( mod_id ) {
    const input = document.getElementById( `file-input${mod_id}` );
    const files = input.files;

    uploads_counter[mod_id] += files.length;
    const label = document.getElementById( `file-label${mod_id}` );
    const parent = document.getElementById( `file-contactus${mod_id}` );

    input.setAttribute( 'id', '' );
    label.classList.add( 'contactus-added' );

    new_input = document.createElement( 'input' );
    new_input.setAttribute( 'type', 'file' );
    new_input.setAttribute( 'name', 'file[]' );
    new_input.setAttribute( 'multiple', 'multiple' );
    new_input.setAttribute( 'onchange', `contactus_uploader(${mod_id})` );
    new_input.setAttribute( 'class', 'contactus-file' );
    new_input.setAttribute( 'id', `file-input${mod_id}` );

    parent.appendChild( new_input );

    if ( uploads_counter[mod_id] > 1 ) {
      label.innerHTML = `${files_added}: ${uploads_counter[mod_id]}`;
    } else {
      label.innerHTML = input.files[0].name.substr( 0, 30 );
    }
  }

  function contactus_recaptcha () {
    const captchas = document.getElementsByClassName( 'g-recaptcha' );

    for ( let i = 0; i < captchas.length; i++ ) {
      const sitekey = captchas[i].getAttribute( 'data-sitekey' );
      const size = captchas[i].getAttribute( 'data-size' );

      if ( captchas[i].innerHTML === '' && sitekey.length !== 0 ) {
        grecaptcha.render( captchas[i], {
          sitekey,
          'theme': 'light',
          size
        } );
      }
    }
  }
  window.addEventListener( 'load', () => {
    contactus_recaptcha();
    contactus_form( form_ids );
  }, false );

  function contactus_form ( m ) {
    m.forEach( ( mod_id, i, arr ) => {
      if ( contactus_sending_flag[mod_id] >= 1 ) {
        const lightbox = document.getElementById( `contactus-sending-alert${mod_id}` ),
          dimmer = document.createElement( 'div' ),
          close = document.getElementById( `contactus-lightbox-sending-alert-close${mod_id}` );

        dimmer.className = 'dimmer';

        dimmer.onclick = function() {
          lightbox.parentNode.removeChild( dimmer );
          lightbox.style.display = 'none';
        };

        close.onclick = function() {
          lightbox.parentNode.removeChild( dimmer );
          lightbox.style.display = 'none';
        };

        document.body.appendChild( dimmer );
        document.body.appendChild( lightbox );
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        lightbox.style.display = 'block';
        if ( window.innerHeight > lightbox.offsetHeight ) {
          lightbox.style.top = `${scrollTop + ( window.innerHeight - lightbox.offsetHeight ) / 2}px`;
        } else {
          lightbox.style.top = `${scrollTop + 10}px`;
        }
        if ( window.innerWidth > 400 ) {
          lightbox.style.width = '400px';
          lightbox.style.left = `${( window.innerWidth - lightbox.offsetWidth ) / 2}px`;
        } else {
          lightbox.style.width = `${window.innerWidth - 70}px`;
          lightbox.style.left = `${( window.innerWidth - lightbox.offsetWidth ) / 2}px`;
        }

        setTimeout( remove_alert, 6000 );

        function remove_alert () {
          if ( lightbox.style.display != 'none' ) {
            lightbox.parentNode.removeChild( dimmer );
            lightbox.style.display = 'none';
          }
        }
      }
      contactus_sending_flag[mod_id] = 0;
    } );
    form_ids = [];
  }
}
