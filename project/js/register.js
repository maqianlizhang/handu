$(".cons").css({"height":24,"width":163,"border-radius":2,"background-color":"#f7f7f7","border":"1px solid #e7e7e7"})
$(".choose input").each(function(index){
	$(this).click(function(){
		$(".way form").eq(index).show().siblings().hide()	
	})
})

