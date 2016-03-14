$(document).ready(function(){
	var root = 'http://jsonplaceholder.typicode.com';
	$.ajax({
		  url: root + '/albums',
		  method: 'GET'
		}).then(function(data) {
			for (var i = 0; i < data.length; i++){
				var $album = document.createElement("DIV");
				$($album).addClass("album");
				$($album).attr('id', i);
				var $text = document.createElement("p");
				$($text).append(data[i].title);
				$($album).append($text);

				$("#library").append($album);
			}

			$(".album").click(function(){
		    	$(".album").css("background-color","white");
		    	$(this).css("background-color","#808080");
		    	var $album = this;

		    	$.ajax({
			    	url: root + '/photos',
			  		method: 'GET'
				}).then(function(data) {
					$("#show").empty();
					for (var i = 0; i < data.length; i++) {
						if (data[i].albumId == $album.id+1){
							var $img = document.createElement("IMG");
							$img.src = data[i].url;
							$("#show").append($img);
						}
					}
				});


			});


		});
});