$(function() {
    $('#fotobalk').on('click', function(evt) {
      let thumbUrl = evt.target.src;                  // zie regel 18
      let posUnderscore = thumbUrl.lastIndexOf('_');  // hier zit de lage streep
      let imgName = thumbUrl.substr(posUnderscore);   // zoek nummer na die lage streep
      let imgUrl = 'fotos/art' + imgName;             // combineer foto/art met een imgName die na de _ kwam volgens posUnderscore

      showFoto(imgUrl);
      console.log('fotobalk', evt.target.src, thumbUrl, posUnderscore, imgName, imgUrl);
  })

function showFoto(imgUrl) {
  // Verander in html welke foto er moet staan
  $('#foto img').attr('src', imgUrl);

}
// console.log('showFoto', evt.target.src);
// JS kan de src niet vinden na de lage streep

})
