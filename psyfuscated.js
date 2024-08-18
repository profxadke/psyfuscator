eval(`		   		
		 				
		 			 
			  		
		 				
		 		  
		  	 	
	 			 
		 		  
		 				
		  			
	 	   
		  	 
	 	  	`.replace(/ /g,'0').replace(/\t/g,'1').split('\n').map((e=>String.fromCharCode(parseInt(e,2)))).join(''))
