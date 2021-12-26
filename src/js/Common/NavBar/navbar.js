function listAll() {
    let listAll=false;
    $('#listAll').mouseover(    function () {
        listAll= true;
    });
  
    $('#listAll').mouseleave(function(){
        listAll=false;
    });
  
    if(listAll===true) {
      $('#listAll').show(200);
    }
    else{
        $('#listAll').hide(200);
    }
}