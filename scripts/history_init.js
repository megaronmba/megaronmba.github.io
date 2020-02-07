function checkAccess(hash){
	var url = '/Kilometer/CheckAccess/';

	jQuery.ajax({
		type: "POST",
		url: url,
		data: { km: hash },
		dataType: "json",
		success: function (data) {
			if(!data)
				window.location.href = '/Account/Login';
		}
	});
}

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
		
		//checkAccess(hash)
		
		if(hash) {
		
			if (hash == 'intro') {
				$('.menu-item').removeClass('mark');
				$('#sec_intro').addClass('mark');
				$.scrollTo('#modul_intro', 400, {easing:'easeInOutQuart', offset: -20, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == 'pre') {
				$('.menu-item').removeClass('mark');
				$('#sec_pre').addClass('mark');
				$.scrollTo('#modul_pre', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '-05') {
				$('.menu-item').removeClass('mark');
				$('#sec_-05').addClass('mark');
				$.scrollTo('#modul_-05', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == '-04') {
				$('.menu-item').removeClass('mark');
				$('#sec_-04').addClass('mark');
				$.scrollTo('#modul_-04', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == '-03') {
				$('.menu-item').removeClass('mark');
				$('#sec_-03').addClass('mark');
				$.scrollTo('#modul_-03', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == '-02') {
				$('.menu-item').removeClass('mark');
				$('#sec_-02').addClass('mark');
				$.scrollTo('#modul_-02', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == '-01') {
				$('.menu-item').removeClass('mark');
				$('#sec_-01').addClass('mark');
				$.scrollTo('#modul_-01', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == 'zero') {
				$('.menu-item').removeClass('mark');
				$('#sec_zero').addClass('mark');
				$.scrollTo('#modul_zero', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == '01') {
				$('.menu-item').removeClass('mark');
				$('#sec_01').addClass('mark');
				$.scrollTo('#modul_01', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == '02') {
				$('.menu-item').removeClass('mark');
				$('#sec_02').addClass('mark');
				$.scrollTo('#modul_2', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == '03') {
				$('.menu-item').removeClass('mark');
				$('#sec_03').addClass('mark');
				$.scrollTo('#modul_3', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == '04') {
				$('.menu-item').removeClass('mark');
				$('#sec_04').addClass('mark');
				$.scrollTo('#modul_4', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == '05') {
				$('.menu-item').removeClass('mark');
				$('#sec_05').addClass('mark');
				$.scrollTo('#modul_5', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == '06') {
				$('.menu-item').removeClass('mark');
				$('#sec_06').addClass('mark');
				$.scrollTo('#modul_6', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == '07') {
				$('.menu-item').removeClass('mark');
				$('#sec_07').addClass('mark');
				$.scrollTo('#modul_7', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == '08') {
				$('.menu-item').removeClass('mark');
				$('#sec_08').addClass('mark');
				$.scrollTo('#modul_8', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == '09') {
				$('.menu-item').removeClass('mark');
				$('#sec_09').addClass('mark');
				$.scrollTo('#modul_9', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == '10') {
				$('.menu-item').removeClass('mark');
				$('#sec_10').addClass('mark');
				$.scrollTo('#modul_10', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == '11') {
				$('.menu-item').removeClass('mark');
				$('#sec_11').addClass('mark');
				$.scrollTo('#modul_11', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == '12') {
				$('.menu-item').removeClass('mark');
				$('#sec_12').addClass('mark');
				$.scrollTo('#modul_12', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == '13') {
				$('.menu-item').removeClass('mark');
				$('#sec_13').addClass('mark');
				$.scrollTo('#modul_13', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == '14') {
				$('.menu-item').removeClass('mark');
				$('#sec_14').addClass('mark');
				$.scrollTo('#modul_14', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == '15') {
				$('.menu-item').removeClass('mark');
				$('#sec_15').addClass('mark');
				$.scrollTo('#modul_15', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == '16') {
				$('.menu-item').removeClass('mark');
				$('#sec_16').addClass('mark');
				$.scrollTo('#modul_16', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			
			else if (hash == '17') {
				$('.menu-item').removeClass('mark');
				$('#sec_17').addClass('mark');
				$.scrollTo('#modul_17', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}			
			
			else if (hash == '18') {
				$('.menu-item').removeClass('mark');
				$('#sec_18').addClass('mark');
				$.scrollTo('#modul_18', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}	
			
			else if (hash == '19') {
				$('.menu-item').removeClass('mark');
				$('#sec_19').addClass('mark');
				$.scrollTo('#modul_19', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}			
			
			else if (hash == '20') {
				$('.menu-item').removeClass('mark');
				$('#sec_20').addClass('mark');
				$.scrollTo('#modul_20', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '21') {
				$('.menu-item').removeClass('mark');
				$('#sec_21').addClass('mark');
				$.scrollTo('#modul_21', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '22') {
				$('.menu-item').removeClass('mark');
				$('#sec_22').addClass('mark');
				$.scrollTo('#modul_22', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '23') {
				$('.menu-item').removeClass('mark');
				$('#sec_23').addClass('mark');
				$.scrollTo('#modul_23', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '24') {
				$('.menu-item').removeClass('mark');
				$('#sec_24').addClass('mark');
				$.scrollTo('#modul_24', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '25') {
				$('.menu-item').removeClass('mark');
				$('#sec_25').addClass('mark');
				$.scrollTo('#modul_25', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '26') {
				$('.menu-item').removeClass('mark');
				$('#sec_26').addClass('mark');
				$.scrollTo('#modul_26', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '27') {
				$('.menu-item').removeClass('mark');
				$('#sec_27').addClass('mark');
				$.scrollTo('#modul_27', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '28') {
				$('.menu-item').removeClass('mark');
				$('#sec_28').addClass('mark');
				$.scrollTo('#modul_28', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '29') {
				$('.menu-item').removeClass('mark');
				$('#sec_29').addClass('mark');
				$.scrollTo('#modul_29', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '30') {
				$('.menu-item').removeClass('mark');
				$('#sec_30').addClass('mark');
				$.scrollTo('#modul_30', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '31') {
				$('.menu-item').removeClass('mark');
				$('#sec_31').addClass('mark');
				$.scrollTo('#modul_31', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '32') {
				$('.menu-item').removeClass('mark');
				$('#sec_32').addClass('mark');
				$.scrollTo('#modul_32', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '33') {
				$('.menu-item').removeClass('mark');
				$('#sec_33').addClass('mark');
				$.scrollTo('#modul_33', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '34') {
				$('.menu-item').removeClass('mark');
				$('#sec_34').addClass('mark');
				$.scrollTo('#modul_34', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '35') {
				$('.menu-item').removeClass('mark');
				$('#sec_35').addClass('mark');
				$.scrollTo('#modul_35', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '36') {
				$('.menu-item').removeClass('mark');
				$('#sec_36').addClass('mark');
				$.scrollTo('#modul_36', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '37') {
				$('.menu-item').removeClass('mark');
				$('#sec_37').addClass('mark');
				$.scrollTo('#modul_37', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '38') {
				$('.menu-item').removeClass('mark');
				$('#sec_38').addClass('mark');
				$.scrollTo('#modul_38', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '39') {
				$('.menu-item').removeClass('mark');
				$('#sec_39').addClass('mark');
				$.scrollTo('#modul_39', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '40') {
				$('.menu-item').removeClass('mark');
				$('#sec_40').addClass('mark');
				$.scrollTo('#modul_40', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '41') {
				$('.menu-item').removeClass('mark');
				$('#sec_41').addClass('mark');
				$.scrollTo('#modul_41', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}
			else if (hash == '42') {
				$('.menu-item').removeClass('mark');
				$('#sec_42').addClass('mark');
				$.scrollTo('#modul_42', 400, {easing:'easeInOutQuart', offset: 0, axis: 'x', onAfter:function(){ 
				// After the scroll
				
				}
				});
			}

			else if (hash == 'start') {

			}
						
			else {
				//alert('Denna sidan finns ej');
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