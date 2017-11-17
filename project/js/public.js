$("#guide").load("public.html .guide",function(){
		
});
$("#ensure").load("public.html .ensure",function(){
		
});
$("#botImags").load("public.html .botImgs",function(){
		
});
$("#botNav").load("public.html .botNav",function(){
		
});
$("#copyright").load("public.html .copyright",function(){
		
});
$.ajax({
	url:"json/all.json",
	type : "get",
	success : function(json){
		/*nav*/
		$("#nav").load("public.html .nav",function(){
			//网站导航
			$(".site").hover(function(){
				$(".siteMap").show();
			},function(){
				$(".siteMap").hide();		
			})
			$(".siteMap").hover(function(){
				$(".siteMap").show();
			},function(){
				$(".siteMap").hide();		
			})
			
			//每个div里面的a颜色
			$(".siteMap>div ul li a").hover(function(){
				$(this).css( {"color":$(this).parent().parent().parent().prev().css("color"),"text-decoration":"underline" })
			},function(){
				$(this).css( {"color":"#666","text-decoration":"none" })
			})
		});
		
		
		/*logo*/
		$("#logo").load("public.html .logo",function(){
			//logo里面的value变换颜色
			$(".place").css({"color":"#c80a28","font-size":12});
			$(".place").focus(function(){
				$(this).val("");
			}).blur(function(){
				$(this).val("初冬杀手锏 必备吸睛卫衣");	
			})
			//lists中所有的div鼠标滑过时
			$(".lists div").each(function(index){
				$(this).hover(function(){
					$(this).css("background","#000").siblings().css("background","#e3e3e3")
					$(this).find("h3").css("color","#000").parent().find("h3").css("color","#fff")
					$(this).find("a").css("color","#000").parent().parent().find("a").css("color","#fff").end().find(".cdif").css("color","#f00")
					$(".listsCon").stop().animate({"left":152},500).css("display","block");
					$(".listsCon>div").eq(index).show()
				},function(){
					$(this).css("background","#e3e3e3")
					$(this).find("h3").css("color","#fff").parent().find("h3").css("color","#000")
					$(this).find("a").css("color","#fff").parent().parent().find("a").css("color","#000").end().find(".cdif").css("color","#f00")
					$(".listsCon").stop().animate({"left":140},500).css("display","none");
					$(".listsCon>div").eq(index).hide()	
				})
				/*$(".logoBottom ul li:eq(0)").hover(function(){
						$(".listsp").show();
					},function(){
						$(".listsp").hide()
				})						*/
			})
			
			//全部商品
			var allgoods = json.allgoods;
			var allgoodsHtmlL = "";
			var allgoodsHtmlR = "";
			for( var i = 0; i < allgoods.length ; i++ ){
				if( i < 9 ){
					allgoodsHtmlL += `
									<li><a href="index.html"><img src="images/${allgoods[i].src}" alt="" /></a></li>
									`	
				}else{
					allgoodsHtmlR += `
									<li><a href="index.html"><img src="images/${allgoods[i].src}" alt="" /></a></li>
									`	
				}
			}
			$(".allGoods01 .listsL" ).html( allgoodsHtmlL );	
			$(".allGoods01 .listsR" ).html( allgoodsHtmlR );	
			//精选推荐
			var choiceness = json.choiceness;
			for( var i = 0 ; i < choiceness.length; i++ ){
			var choicenessHtml = "";
					choicenessHtml += `
										<h4>${choiceness[i].con}</h4>
										`
				for( var j = 0 ; j < choiceness[i].as.length ;j++ ){
					choicenessHtml += `
										<a href="">${choiceness[i].as[j]}</a>
									`
				}
				$(".allGoods02").append(`<div>${choicenessHtml}</div>` )
			}
			//女装
			var menclothes = json.menclothes;
			var menImgs = "";
			for( var attr in menclothes){
				if( attr == "imgs"){
					for( var i = 0 ; i < menclothes[attr].length ; i++ ){
						menImgs += `<a href=""><img src="images/${menclothes[attr][i]}"/></a>`	
					}
				}
				if( attr == "cons"){
					for( var i = 0 ; i < menclothes[attr].length; i++ ){
						var menclothesHtml ="";
						menclothesHtml  += `
											<h4>${menclothes[attr][i].con}</h4>
											`
						for( var j = 0 ; j <menclothes[attr][i].as.length ;j++ ){
							menclothesHtml  += `
												<a href="">${menclothes[attr][i].as[j]}</a>
											`
						}
						$(".allGoods03").append(`<div>${menclothesHtml}</div>` )
					}
					$(".allGoods03").append(menImgs)
				}	
			}
			
			
			
		});
		
		
	}
})