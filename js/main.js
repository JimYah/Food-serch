$(function(){
  $('.content').hide();
  $('#serch').bind('click',(function(){
    $.ajax({
      type: 'GET',
      url: 'https://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AV&CaseNo2=2&FileType=1&Lang=C&FolderType=',
      success: function(data) {
        $('.content').show();
        $('.content-list').html('');
        var thisData = JSON.parse(data);
        $.each(thisData, function(i, item){

          if ($('#dist').val() == item.Zipcode.slice(0,3)) {
            src = '<li>\
                      <h2> ' + item.Name + '</h2>\
                      <img src=' + item.Picture1 + ' ' + '>\
                      <p class="description">' + item.Description + '</p>\
                      <p> 地址 - ' + item.Add + '</p>\
                      <p> 電話 - ' + item.Tel + '</p>\
                      <p> 營業時間 - ' + item.Opentime + '</p>\
                      <a href="https://www.google.com.tw/maps/place/'+ item.Add +'" target=_blank>\
                        <i class="fa fa-map-marker" aria-hidden="true"></i>\
                        點我前往GoogleMap\
                      </a>\
                    </li>';
            $('.content-list').append(src);
          }
        });
        $('html, body').animate({
          scrollTop: $('#list').offset().top
        }, 800);
      }
    });
  }));
});
