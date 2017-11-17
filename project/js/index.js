$(".bannerOne li").each(function(index){
	$(this).css({"background":"url(img/star0"+(index+1)+".png) no-repeat center","height":90})
})
$(".bannerTwo li").each(function(index){
	$(this).css({"background":"url(img/nz0"+(index+1)+".png) no-repeat center","height":90})
})

//渐变
var bannerTimer = setInterval(bannerPlay,3000)
var bannerIndex = 0;
 function bannerPlay(){
	bannerIndex++;
	if( bannerIndex == 2 ){
		bannerIndex = 0;
	}
	$("#banner ul").eq(bannerIndex).fadeIn(1000)
				  .siblings().fadeOut(1000);
	$("#banner ol li").eq(bannerIndex).addClass("current")
					  .siblings().removeClass("current");
	
 }
$("ol li").hover(function(){
	clearInterval(bannerTimer);
	bannerIndex = $(this).index()-1;
	$(this).css("cursor","pointer");
	bannerPlay();	
},function(){
	bannerTimer = setInterval(bannerPlay,3000)
})

//
//


$(".tops").load("public.html .menTop",function(){
		
});
$(".sameBots").load("public.html .bots",function(){
		
});

//友情链接里面的无缝滚动
$(".yLink .yl").animate({"left":-2800+$(".yLink .yl").parent().outerWidth()},20000,function(){
	$(this).css("left",$(".yLink .yl").parent().outerWidth())
		.end()
		.animate({"left":-2800+$(".yLink .yl").parent().outerWidth()},20000)
	
})
$.ajax({
	url:"json/all.json",
	type : "get",
	success : function(json){
		//新闻
		
		//左边
		var operate = json.operate;
		var operateHtml = "";
		for( var i = 0; i < operate.length ; i++ ){
			operateHtml += `
							<li><a href="index.html"><img src="img/${operate[i].src}" alt="" /></a></li>
							`
		}
		$(".newsLeft ul" ).html( operateHtml );	
		//右边
		//第一个盒子
		var newsone = json.newsone;
		var newsoneHtmlL = "";
		var newsoneHtmlR = "";
		var newsoneUl = "";
		var newsoneUltwo = "";
		newsoneHtmlL = `<dl class="smallImg">
							<dt><a href=""><img src="img/${newsone.srcone}" alt="" /></a></dt>
							<dd><p><a href="">${newsone.conone}</a></p></dd>
						</dl>
						`
		for( var i = 0; i < newsone.listone.length ; i++ ){
			newsoneUl += `
						<li><a href="">${newsone.listone[i].details}</a></li>
						`;
		}
		newsoneHtmlR= `<dl class="smallImg">
							<dt><a href=""><img src="img/${newsone.srctwo}" alt="" /></a></dt>
							<dd><p><a href="">${newsone.contwo}</a></p></dd>
						</dl>
						`				
		for( var j = 0; j < newsone.listtwo.length ; j++ ){
				newsoneUltwo += `
					<li><a href="">${newsone.listtwo[j].details}</a></li>
				`	
		}	
		$(".newsOneL").html( newsoneHtmlL).append(`<ul>${newsoneUl}</ul>`)
		$(".newsOneR").html( newsoneHtmlR).append(`<ul>${newsoneUltwo}</ul>`)
		
		//第二个盒子
		var newstwo = json.newstwo;
		var newstwoUl = "";
		var newstwoHtml = "";
		newstwoHtml =`	<img src="img/${newstwo.srcone}" alt="" />`
		for( var i = 0; i < newstwo.listone.length ; i++ ){
			 newstwoUl += `
							<li class="clearfix"><a href="">${newstwo.listone[i].details}</a><span>[详细内容]</span></li>
						`
		}
		$(".news02").html( newstwoHtml).append(`<ul>${newstwoUl}</ul>`)		
		
		
		//第三个盒子
		var newsthree = json.newsthree;
		var newsthreeHtmlL = "";
		var newsthreeHtmlR = "";
		var newsthreeUl = "";
		var newsthreeUltwo = "";
		newsthreeHtmlL = `<dl class="smallImg">
							<dt><a href=""><img src="img/${newsthree.srcone}" alt="" /></a></dt>
							<dd><p><a href="">${newsthree.conone}</a></p></dd>
						</dl>
						`
		for( var i = 0; i < newsthree.listone.length ; i++ ){
			newsthreeUl += `
						<li><a href="">${newsthree.listone[i].details}</a></li>
						`;
		}
		newsthreeHtmlR= `<dl class="smallImg">
							<dt><a href=""><img src="img/${newsthree.srctwo}" alt="" /></a></dt>
							<dd><p><a href="">${newsthree.contwo}</a></p></dd>
						</dl>
						`				
		for( var j = 0; j < newsthree.listtwo.length ; j++ ){
				newsthreeUltwo += `
					<li><a href="">${newsthree.listtwo[j].details}</a></li>
				`	
		}	
		$(".newsThreeL").html( newsthreeHtmlL).append(`<ul>${newsthreeUl}</ul>`)
		$(".newsThreeR").html( newsthreeHtmlR).append(`<ul>${newsthreeUltwo}</ul>`)
		
		//第四个盒子
		var newsfour = json.newsfour;
		var newsfourUl = "";
		var newsfourHtml = "";
		newsfourHtml =`	<img src="img/${newsfour.srcone}" alt="" />`
		for( var i = 0; i < newsfour.listone.length ; i++ ){
			 newsfourUl += `
							<li class="clearfix"><a href="">${newsfour.listone[i].details}</a><span>[详细内容]</span></li>
							`
		}
		$(".news04").html( newsfourHtml).append(`<ul>${newsfourUl}</ul>`)		
		//鼠标滑过
		
		$(".nrNav li").mouseenter(function(){
			$(this).css({"color":"#ff0f3f","border-bottom-color":"#ff0f3f"}).siblings().css({"color":"#000","border-bottom-color":"#E7E7E7"});
			$(".ps").eq($(this).index()).css("display","block").siblings().css("display","none")
		})
		
		
		
			
		
		//clothe
		$(".clothe").load("public.html .clothes",function(){
			//所有的列表图片
			var clothes01 = json.clothes01;
			for( var attr in clothes01){
				var clothes01Html = "";
				for( var j = 0 ; j < clothes01[attr].length ; j++ ){
					clothes01Html += `<li>
						<a href=""><img src="img/${clothes01[attr][j].src}"/></a>
						<p>${clothes01[attr][j].price01} <span><del>${clothes01[attr][j].price02}</del></span></p>
						<input type="button" value="点击抢购" />
					</li>`		
				}
				if( attr == "new01"){
					$(".clothesB ul").eq(0).html(clothes01Html )
				}else if( attr == "new02"){
					$(".clothesB ul").eq(1).html(clothes01Html )
				}else if( attr == "new03"){
					$(".clothesB ul").eq(2).html(clothes01Html )
				}else if( attr == "new04"){
					$(".clothesB ul").eq(3).html(clothes01Html )
				}else if( attr == "new05"){
					$(".clothesB ul").eq(4).html(clothes01Html )
				}
			}
			
			//自己换页面
			var clothesTimer = setInterval(clothesPlay,2000)
			var clothesIndex = 0;
			function clothesPlay(){
				clothesIndex ++ ;
				if( clothesIndex == 5 ){
					clothesIndex = 0;
				}
				$(".clothesT ul li").eq(clothesIndex).find("a").css({"color": "#fff","background": "#c80a28"})
						.parent().siblings().find("a").css({"color": "#000","background": "#fff"})
				$(".clothesB ul").eq(clothesIndex).fadeIn(1000).siblings().fadeOut(1000);
			}
			
			$(".clothesT ul li").mouseenter(function(){
				clearInterval( clothesTimer );
				clothesIndex = $(this).index()-1;
				clothesPlay();
			}).mouseleave(function(){
				clothesTimer = setInterval(clothesPlay,2000)
			})
		});

	}
})

