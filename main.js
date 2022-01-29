$(document).ready(function(){
	// counter to recognize new item in the list
	var itemId = 1;

	// add items to the list
   $("form").submit ( function (event){
   		var txt = document.createElement("li");
   		var btn = document.createElement("button");
   		txt.id = 'item-' + itemId;
  		btn.id = 'delete-'+ itemId;
  		btn.className = 'item-button bg-light';
  		txt.className = 'm-1';
  		txt.innerHTML = $("input").val() + ' '; 
  		btn.innerHTML = '&#10060;';
  		$(txt).append(btn);
  		$("ul").append(txt); 
  		$("input").val('');
  		itemId ++;
  		event.preventDefault();
  	});


   $(document).on('click',"ul .item-button", function(){
   		$(this).parent().remove();
   });

});