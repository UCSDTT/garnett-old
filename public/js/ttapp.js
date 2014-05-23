'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.rowdata').click(redirectToUpdateView);
}

// Click listener for table row sends you to update page for that id
function redirectToUpdateView(e) {
  e.preventDefault();
  var userid = $(this).find('.rowid').html();
  console.log(userid);
  window.location.href = '/admin/update/' + userid;
}