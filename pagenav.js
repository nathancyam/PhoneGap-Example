/**
 * @author Administrator
 */
$(document).ready(function(){
	$('#linkContacts').click(goContacts());
	
	$(function goContacts(){
		$("#main").load("contacts.html");		
	});	
	
	$("#banner").click(function(){
		alert("Banner clicked");
	});
});
