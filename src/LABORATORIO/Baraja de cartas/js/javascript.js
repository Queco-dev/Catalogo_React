const grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

const TotalTarjetas=grupoTarjetas.concat(grupoTarjetas)


function BarajarTarjetas(){
  let resultado;

  resultado=TotalTarjetas.sort(function(){
    return(
      
      0.5-Math.random()
    )
  })

  return resultado
}


const ReparteTarjetas=()=>{

  const mesa=document.getElementById("mesa")
  const TarjetasBarajadas=BarajarTarjetas()
  // console.log(mesa)

  mesa.innerHTML=""




  return(
TarjetasBarajadas.forEach( (iconos,index)=>{
  // console.log(iconos,index)

  const tarjeta=document.createElement("div")

  tarjeta.innerHTML= 
    "<div class='tarjeta'data-valor="+iconos+">"+
    "<div class='tarjeta__contenido'>"+
    iconos+
    "</div>"+
    "</div>";

  mesa.appendChild(tarjeta)



}))
}


function Descubrir(){
  let descubiertas;
  let TotalDescubierta=document.querySelectorAll(".descubierta:not(.acertada)")
  
  if(TotalDescubierta.length>1){
    return;
  }

  this.classList.add("descubierta")

  descubiertas=document.querySelectorAll(".descubierta:not(.acertada)")
  if(descubiertas.length<2){
    return
  }

  // if(descubiertas[0].dataset.valor===descubiertas[1].dataset.valor){
  //   console.log("acierto")
  // } else{
  //   console.log("error")
  // }

  Comparar(descubiertas)

}



// return(
  //  console.log(document.querySelectorAll(".tarjeta")) 
  // )
  
  
function Comparar(tarjetasAcomparar){
  if(tarjetasAcomparar[0].dataset.valor===tarjetasAcomparar[1].dataset.valor){
    Acierto(tarjetasAcomparar)
  } else{
    error(tarjetasAcomparar)
  }
}

function Acierto(lasTarjetas){
  lasTarjetas.forEach( (elemento)=>{
    elemento.classList.add("acertada")

  })
}

function error(lasTarjetas){
lasTarjetas.forEach( (elemento)=>{
  return(elemento.classList.add("error"))
})

setTimeout(function(){
  
  lasTarjetas.forEach(function(elemento){
  
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error")
   
  })
  
  },1000)
  }





  
  ReparteTarjetas()
  
  
  
  document.querySelectorAll(".tarjeta").forEach(
  function(iconos){
   iconos.addEventListener("click", Descubrir)
  }
  )


