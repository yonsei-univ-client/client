function loadHTML(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                document.write(allText);
            }
        }
    }
    rawFile.send(null);
}
$(document).ready(function () {
    /*메뉴바 상단 event*/
    $('#item1').mouseover(function () {
      $('#item1' ).css('color','#013776');
    });
    $('#item2').mouseover(function () {
      $('#item2' ).css('color','#013776');

    });
    $('#item3').mouseover(function () {
      $('#item3' ).css('color','#013776');

    });
    $('#item4').mouseover(function () {
      $('#item4' ).css('color','#013776');

    });
    $('#item5').mouseover(function () {
      $('#item5' ).css('color','#013776');

    });
    $('#item1').mouseleave(function () {
      $('#item1' ).css('color','#707070');

    });
    $('#item2').mouseleave(function () {
      $('#item2' ).css('color','#707070');

    });
    $('#item3').mouseleave(function () {
      $('#item3' ).css('color','#707070');

    });
    $('#item4').mouseleave(function () {
      $('#item4' ).css('color','#707070');

    });
    $('#item5').mouseleave(function () {
      $('#item5' ).css('color','#707070');
    });
    /*메뉴 테이블 event*/
    $('#table').mouseover(function () {
      $('#table').show();
    })
    $('.flexbox').mouseover(function ( ){
      $('#table').show();
    })
    $('#table').mouseleave(function () {
      $('#table').hide();
    })
    $('.flexbox').mouseleave(function ( ){
      $('#table').hide();
    })
    /*introduction event*/
    $('#introduction').mouseover(function ( ){
      $('#intro').css('color','#013776');
      $('#item1').css('color','#013776');
    })
    $('#introduction').mouseleave(function () {
      $('#intro').css('color','#707070');
      $('#item1').css('color','#707070');
    })
    /*research event*/
    $('#r1').mouseover(function ( ){
      $('#ri').css('color','#013776');
      $('#item2').css('color','#013776');
    })
    $('#r1').mouseleave(function () {
      $('#ri').css('color','#707070');
      $('#item2').css('color','#707070');
    })
    $('#r2').mouseover(function ( ){
      $('#ro').css('color','#013776');
      $('#item2').css('color','#013776');
    })
    $('#r2').mouseleave(function () {
      $('#ro').css('color','#707070');
      $('#item2').css('color','#707070');
    })
    $('#r3').mouseover(function ( ){
      $('#ra').css('color','#013776');
      $('#item2').css('color','#013776');
    })
    $('#r3').mouseleave(function () {
      $('#ra').css('color','#707070');
      $('#item2').css('color','#707070');
    })
    /*members event*/
    $('#m1').mouseover(function ( ){
      $('#pro').css('color','#013776');
      $('#item3').css('color','#013776');
    })
    $('#m1').mouseleave(function () {
      $('#pro').css('color','#707070');
      $('#item3').css('color','#707070');
    })
    $('#m2').mouseover(function ( ){
      $('#mem').css('color','#013776');
      $('#item3').css('color','#013776');
    })
    $('#m2').mouseleave(function () {
      $('#mem').css('color','#707070');
      $('#item3').css('color','#707070');
    })

    /*publication event*/
    $('#publication').mouseover(function ( ){
      $('#pub').css('color','#013776');
      $('#item4').css('color','#013776');
    })
    $('#publication').mouseleave(function () {
      $('#pub').css('color','#707070');
      $('#item4').css('color','#707070');
    })
    $('#contact').mouseover(function ( ){
      $('#con').css('color','#013776');
      $('#item5').css('color','#013776');
    })
    $('#contact').mouseleave(function () {
      $('#con').css('color','#707070');
      $('#item5').css('color','#707070');
    })
  })