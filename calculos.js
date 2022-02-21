function calcular(){
    let media= document.getElementById("final").value
    if(media>=3.0){
    quantoPrecisa=-((media*0.6)-5)/0.4
    var valorfinal= Math.round(quantoPrecisa * 10)/10
    console.log(valorfinal)
    document.getElementById("notadafinal").innerHTML=valorfinal+" ;" +" " + "Boa Sorte :)"}
    if(media<3.0){
        document.getElementById("notadafinal").innerHTML='É serio mesmo fera ?'
        
    }
    if(media>=7.0){
        document.getElementById("notadafinal").innerHTML='Legal fera'
    }
}
