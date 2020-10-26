// Écrivez votre code JavaScript ici.
 const ul =  document.querySelector('ul') ;
 const  inserrer  =  document.querySelector ( 'input' ) ;
 const bouton=  document.querySelector('button') ;

 bouton . onclick  =  function ( )  {
  let valeurcourante  =  inserrer.value ;
  inserrer.value  =  "" ;
 const li = document.createElement('li');
 const span = document.createElement('span');
 const boutton = document.createElement('button');

 li. appendChild ( span) ;
 li. appendChild ( boutton ) ;
 span.textContent= valeurcourante;
 boutton.textContent= "delete";
 ul.appendChild(li);


 boutton. onclick  =  function(){
 ul . removeChild ( li ) ;
input . focus ( ) ;
 }

}
