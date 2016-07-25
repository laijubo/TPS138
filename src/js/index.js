//banner轮播函数

$(function(){
            // 2）用jquery选择器获取页面元素
            var $bannerlist = $('.bannerlist');
            var $bannerNav = $('.bannerNav');
            var timer;
			var len = $('.bannerUl').children("li").length;
				
            var index = 0;
            
            // 图片数量

            // 初始化
     		show();

            // 设置定时器，3秒切换一张图片
            var timer;

            // 鼠标移入清除定时器，鼠标移出重启定时器
            $bannerlist.on('mouseenter',function(){
                clearInterval(timer);
				$bannerNav.show();
				$('.prev').show();
				$('.next').show();
            }).on('mouseleave',function(){
                timer = setInterval(carousel,3000);
				$bannerNav.hide();
				$('.prev').hide();
				$('.next').hide();
            }).trigger('mouseleave');

            // 点击前后按钮实现切换
            $('.prev').on('click',function(){
                index--;
                console.log(index);
                show();
            });$('.next').on('click',function(){
                index++;
                show();
            });

            // 点击按钮切换
            $('.bannerNav').on('click','li',function(){
                index = $(this).index();
                show();
            });

            
              console.log(index);


            // 轮播函数
            function carousel(){
                index++;
                show();
            }


            // 显示图片的函数
            function show(){
                // 处理index值，使其实现循环轮播
                if(index<0){
                    index = len - 1;
                }else if(index > len - 1){
                    index = 0;
                }
                // 大图
                $bannerlist.find('li').eq(index).show().siblings().hide();

                // 小图
                $('.bannerNav').find("li").eq(index).addClass("ChangeColor").siblings().removeClass("ChangeColor");
            }
			
//二级子菜单
	var $allGoods = $(".navcon h3");
	var $allGoodList = $(".navcon h3 .allGoodList");
	var $goodsLi = $allGoodList.find("li");
	$allGoods.hover(function(){
		$allGoodList.show();
		$goodsLi.hover(function(){
			$(this).children('div').show();
		},function(){
			$(this).children('div').hide();
		})
	},function(){
		$allGoodList.hide();
	});
//头部部分显示和隐藏
	
	var $ctryMeyLi1 = $(".ctryMey").children("li").first();
	var $ctryMeyLi2 = $(".ctryMey").children("li").last();
	var $rightList3 = $(".headRight .rightList3");
	$ctryMeyLi1.hover(function(){
		$(".ctryMey .countrylist").show();
		},function(){
		$(".ctryMey .countrylist").hide();
	});
	
	$ctryMeyLi2.hover(function(){
		$(".ctryMey .moneylist").show();
		},function(){
		$(".ctryMey .moneylist").hide();
	});
	$rightList3.hover(function(){
		$rightList3.children("p").show();
	},function(){
		$rightList3.children("p").hide();
	});
	
//轮播列表
	var i = 0;
	var clone = $(".lunbogoods .newProductList > li").first().clone();//克隆第一张图片
    $(".lunbogoods .newProductList").append(clone);//复制到列表最后
    var size = $(".lunbogoods .newProductList > li").length;
    //for (var j = 0; j < size-1; j++) {
       	//$(".banner .num").append("<li></li>");
    //}

      $(".lunboBtn > li").first().addClass("changeBtnColor");

                /*自动轮播*/

                var t = setInterval(function () { i++; move();},4000);

                /*鼠标悬停事件*/

    $(".lunbogoods").hover(function () {
        clearInterval(t);//鼠标悬停时清除定时器
    }, function () {
		t = setInterval(function () { i++; move(); }, 4000); //鼠标移出时设定定时器
                });




                /*鼠标点击按钮事件*/

              $(".lunboBtn > li").click(function () {

                    var index = $(this).index();//获取当前索引值
                    i = index;
                    $(".lunbogoods .newProductList").stop().animate({ left: -index * 1200 }, 1000);
                    $(this).addClass("changeBtnColor").siblings().removeClass("changeBtnColor");
                });



                /*向左按钮*/
                /*$(".banner .btn_l").click(function () {
                    i++;
                    move();
                })

                
                /*向右按钮*/
                /*$(".banner .btn_r").click(function () {
                    i--;
                    move();
                })*/

                /*移动事件*/
                function move() {
                    if (i == size) {
                        $(".lunbogoods .newProductList").css({ left: 0 });
                        i = 1;
                    }
                    if (i == -1) {
                        $(".lunbogoods .newProductList").css({ left: -(size - 1) * 1200 });
                        i = size - 2;
                    }
                    $(".lunbogoods .newProductList").stop().animate({ left: -i * 1200 }, 1000);

                    if (i == size - 1) {
                        $(".lunboBtn > li").eq(0).addClass("changeBtnColor").siblings().removeClass("changeBtnColor");
                    } else {
                        $(".lunboBtn > li").eq(i).addClass("changeBtnColor").siblings().removeClass("changeBtnColor");
                    }
                }
	


});

















