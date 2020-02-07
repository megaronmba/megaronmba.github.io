$(document).ready(function(){
	if($.browser.msie && $.browser.version == 8) {
	    //$('#ie-info').text('You are using IE8 in version '+ document.documentMode +' compatible mode.');
	}
	
	//var base_url_1 = 'http://www.d16878353.u238.foretag.surftown.se';
	//var base_url_2 = 'http://www.d16878353.u238.foretag.surftown.se/';
	//var base_url_3 = 'http://d16878353.u238.foretag.surftown.se';
	var base_url_4 = 'http://www.megaronmba.com';
	var pathname = window.location;

	$.historyInit(function (hash) {
		if(hash) {
		
			if (hash == 'nyheter') {
				$('.menu-item').removeClass('mark');
				$('#sec_nyheter').addClass('mark');
				$.scrollTo('#modul_1', 400, {easing:'easeInOutQuart', offset: -20, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == 'produktioner') {
				$('.menu-item').removeClass('mark');
				$('#sec_produktioner').addClass('mark');
				$.scrollTo('#modul_2', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == 'radio') {
				$('.menu-item').removeClass('mark');
				$('#sec_radio').addClass('mark');
				$.scrollTo('#modul_3', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == 'webb') {
				$('.menu-item').removeClass('mark');
				$('#sec_webb').addClass('mark');
				$.scrollTo('#modul_4', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == 'film') {
				$('.menu-item').removeClass('mark');
				$('#sec_film').addClass('mark');
				$.scrollTo('#modul_5', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == 'installationer') {
				$('.menu-item').removeClass('mark');
				$('#sec_installationer').addClass('mark');
				$.scrollTo('#modul_6', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == 'omoss') {
				$('.menu-item').removeClass('mark');
				$('#sec_omoss').addClass('mark');
				$.scrollTo('#modul_7', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == 'kontakt') {
				$('.menu-item').removeClass('mark');
				$('#sec_kontakt').addClass('mark');
				$.scrollTo('#modul_8', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == 'start') {

			}
						
			else {
				alert('Denna sidan finns ej');
			}
 			
		    
		} else {
				//alert('Disch');			
		}
	});
	
	if (pathname == base_url_4) {
				//alert('First Page');
	} else {}
	
	$("#menu a, a.radiotrigger").live("click", function(){
		var hash = this.href;
		hash = hash.replace(/^.*#/, '');
		$.historyLoad(hash);
		return false;
	});
	
});