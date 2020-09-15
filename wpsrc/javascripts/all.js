import * as $ from 'jquery';
import Foundation from 'foundation-sites';

$(function(){
  $(document).foundation();

  $(".callout.feature.expandable").on( "click touch", function (e) {
    e.preventDefault();
    $(this).toggleClass( "is-expanded" );
  });
});
