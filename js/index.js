// index.js

//gnb
$(function(){

    $('.btn-toggle').on('click', function(){
      $('#gnb').addClass('show');
      console.log('click');
    });
  
    $('.btn-close').on('click', function(){
      $('#gnb').removeClass('show');
    });
  
  
  //url 파라미터 값 확인 (synop=1)
    var val = location.href.substr(
      location.href.lastIndexOf('=') + 1
    );
  
    //시놉시스 
    if(val == 1) {
      $('#synop_popup').addClass('show');
      $('#gnb ul li').removeClass('active');
      $('#gnb ul li').eq(2).addClass('active');
      $('.header_box').css('display', 'none');
      $('title').text('주토피아');
    } else {
      $('#synop_popup').removeClass('show');
    }  
  
    //갤러리
    $('#main > .thumb > li').on('click', function(){
      //이미지 주소값 읽기
      let getUrl = $(this).find('img').attr('src');
  
      console.log(getUrl);
  
      $('#main > figure > img').attr('src', getUrl);
    })
  });
