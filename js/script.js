$(function(){
	$('#back a').on('click',function(){
		$('body, html').animate({
			scrollTop:0
		}, 800);  //アニメーションの動作時間
		return false;
	});
});