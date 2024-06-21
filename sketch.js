function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("blue");
      
    textSize(64);
    textAlign(CENTER,CENTER);
    
    let maximo = width;
  let minimo = 0;
    
    let palavra = "Sophia";
    let quantidade = map(mouseX, 0, maximo, minimo, palavra.length);
    
    console.log(quantidade);
    
  let parcial = palavra.substring(0, quantidade);
    
  text(parcial, 200, 200);
    
    
   // if(mouseX < 50){     
      
   // let palavra = "S";
   //   text(palavra,200,200);
    
  //  }
     
   //  else if(mouseX < 100){     
      
   // let palavra = "So";
    //  text(palavra,200,200);}
    
    // else if(mouseX < 150){     
      
  //  let palavra = "Sop";
   //   text(palavra,200,200);}
    
   //  else if(mouseX < 200){     
      
   // let palavra = "Soph";
   //   text(palavra,200,200);}
   // 
   //   else if(mouseX < 250){     
      
   // let palavra = "Sophi";
   //   text(palavra,200,200);}
    
   //  else {
  //let palavra = "Sophia";
  //text(palavra, 200, 200);
  // }
    
    
  }