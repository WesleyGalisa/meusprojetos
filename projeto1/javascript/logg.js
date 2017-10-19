var comentarios
comentarios = document.querySelectorAll(".comentario");

var comentarioAtual
comentarioAtual = 0;


setInterval(function(){
    
    comentarios.forEach(function(comentario){
     comentario.style.display="none"; 
      
    });

    comentarios[comentarioAtual].style.display="block";
    comentarioAtual++;

    if(comentarioAtual >= comentarios.length){
        comentarioAtual = 0;
    }


},4000);


function trocaMenu(){
    var p1 = document.getElementById("p1");
    var pp = document.getElementById("pp");
   
if(1+1 == 2){
        pp.style.display ="none";
        p1.style.display ="block";
    }
}

function voltaMenu(){
    var p1 = document.getElementById("p1");
    var pp = document.getElementById("pp");

    if(2>0){
        p1.style.display ="none";
        pp.style.display ="block";
    }
}