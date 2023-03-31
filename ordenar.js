function ordenar (){
      
    let t = document.getElementById("texto").value;
    let resultado = document.getElementById("resultado"); 
      t = t.split(",");
 
      for (var i = 0; i < t.length; i++){
          t.sort();
          document.getElementById("resultado").innerHTML = t;
    }    

}

