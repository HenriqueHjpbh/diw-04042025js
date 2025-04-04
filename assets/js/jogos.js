var id = new function(){
     URLSeacrchParams(Location.search).get('id')};

var elemarray = elem.find(function (elem) {
  return elem.id == id;
});
var nome = document.getElementById(nome_usuario).value;
var elem = document.getElementById(btnExe1);
elem.addEventListener('click',function(){
    document.getElementById('res1').innerHTML = nome.value +", seja bem vindo!"
})

