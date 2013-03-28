/**
 * @author Administrator
 */
$(document).ready(function(){
	$('#linkContacts').click(goContacts());
	$('#linkInfo').click(goInfo());
	
	$(function goContacts(){
		$("#main").load("contacts.html");		
	});	
	$(function goInfo(){
		$("#main").load("info.html");		
	});	
	
	$("#banner").click(function(){
		alert("Banner clicked");
	});
});
