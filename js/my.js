var my={
  init:function(){
  	 setTimeout(function(){
       $(".dots ul li.li_dot_b").removeClass("li_dot_b").addClass("li_dot_b_roll");
       $(".dots ul li.li_dot_r").removeClass("li_dot_b").addClass("li_dot_r_roll");
       $(".dots ul li.li_dot_y").removeClass("li_dot_b").addClass("li_dot_y_roll");
       $(".dots ul li.li_dot_g").removeClass("li_dot_b").addClass("li_dot_g_roll");
       $(".loading .photo").addClass("photo_hide");
        setTimeout(function(){
            $(".loading").remove();
            $(".main-container").addClass("main-container_show");
        },1300);      
    },3800);
  	 radius=5;
     question="";
     //菜单
     $(".menu").on("click",function(e){
     	  if($(this).hasClass("active")){
                return;
     	  }
        $(".menu").removeClass("active");
        $(".click-effect").remove();
        $("<div class='click-effect click-effect-active'></div>")
         .css({"left":(e.pageX-radius)+"px","top":(e.pageY-radius)+"px"}).appendTo($(".main-container"));
        $(this).addClass("active");  
        var pageid=$(this).attr("id");
        $(".page-panel").removeClass("show").addClass("hide");
        $("."+pageid).removeClass("hide").addClass("show");   
        if(pageid=="page3"){
             $(".page3 .bubble-info").removeClass("show").addClass("hide");
        }  
        if(pageid=="page4"){
            $(".page4 .wantyou-h").removeClass("wantyou-hide");
            $(".page4 .wantyou .contact").removeClass("show");
        }     
      });
     //page4
     $("#want").on("click",function(){
          $(".wantyou-h").addClass("wantyou-hide");
          $(".wantyou .contact").addClass("show");
     });
     //page2
     $(".piano").on("click",function(){
          $(".xianpu .yinfu").each(function(i){
              $(this).css("transform","rotate("+(1-Math.random())*90+"deg) translateY("+(1-Math.random())*20+"px)");
          });
          question+=$(this).text();
          my.check();    
     });
     //page3
     $(".bubble").on("click",function(){
           var data_tag=$(this).attr("data-tag");
           $(".bubble-info").removeClass("show").addClass("hide");
           $("."+data_tag).removeClass("hide").addClass("show");
     });
     $(".bubble-info .close").on("click",function(){
          $(this).parent().removeClass("show").addClass("hide");
     });
     $(window).resize(function(){
        var deviceWidth=document.documentElement.clientWidth;
        if(deviceWidth<=640){
           document.documentElement.style.fontSize=deviceWidth/6.4+"px";
        }
    });
  },
  check:function(){
       var isValid=false;
       for(var i in basic){
            if(i.indexOf(question)==0){//以某一单词开始
              if(i==question){//答案匹配
                 my.huanhu(basic[i]);
                 break;
              }
              else{//输入未完成
                 isValid=true;
              }
           }
       }
       if(!isValid){
             question="";
       }
  },
  huanhu:function(e){
    $("#huanhu").removeClass("hide").addClass("show");
    $("#music_answer").text(e).removeClass("hide").addClass("show");
   setTimeout(function(){
       $("#huanhu").removeClass("show").addClass("hide");
       $("#music_answer").removeClass("show").addClass("hide");
    },2000);
  }
}