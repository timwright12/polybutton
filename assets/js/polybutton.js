/*
  Polybutton - An accessible version of links that look like buttons
  License: MIT/GPLv2
  Author: Tim Wright, csskarma.com
  Script structure inspired by Scott Jehl's Picturefill
*/

;(function( b ){

  "use strict";
  
  b.polybutton = function() {

    var btn = b.document.querySelectorAll( "span[data-accessible]" );
    var count = btn.length;
    var i, obj, noscript, noscriptEl, access, href, type, value, initClass, genBtn;

    // Loop through the polybuttons
    for ( i = 0; i < count; i = i + 1 ) {
      
      // store some variables
      obj = btn[i];
      
      noscript = document.createElement('div');
      noscriptEl = obj.querySelector('noscript');
      noscript.innerHTML = (noscriptEl) ? noscriptEl.textContent : '';
      noscript = noscript.querySelector('a');
      noscript = (noscript) ? noscript.getAttribute('href') : '#';
      
      href = obj.getAttribute('data-href') || noscript;
      access = obj.getAttribute('data-accessible');
      type = obj.getAttribute('data-type');
      value = obj.getAttribute('data-value');
      initClass = obj.getAttribute('data-class');
      
      // make sure we're dealing with a button
      if( access === 'button' ) {
      
        genBtn = document.createElement( 'button' );
        
        // build out the new button asset
        genBtn.setAttribute("class", initClass);
        genBtn.setAttribute("type", type);
        genBtn.setAttribute("data-url", href);
        genBtn.setAttribute("role", "button");
        genBtn.innerHTML = value;
        
        // add the new button into the DOM
        obj.appendChild(genBtn);
        
        // check to see if we can use addEventListener on the new button, then tie a click event to it
        if( genBtn.addEventListener ) {
        
          genBtn.addEventListener('click', function(e) {
  
            window.location = this.getAttribute('data-url');
            
          }, false);
        
        } else if( genBtn.attachEvent ) {
        
          genBtn.attachEvent( "onload", function(e){
            window.location = this.getAttribute('data-url');
          });
        
        } // end if addEventListener
      
      } // end if button
      
    } // end for loop
    
  }; // end polybutton
  
  // execute on DOM ready (b.load as a fallback)
  if( b.addEventListener ){

    b.addEventListener( "DOMContentLoaded", function(){
      
      // execute polybutton
      b.polybutton();
      
      // only do it once
      b.removeEventListener( "load", b.polybutton, false );
      
    }, false );
  
  } else if( b.attachEvent ){

    b.attachEvent( "onload", b.polybutton );

  } // end initial load event
  
}( this ));
