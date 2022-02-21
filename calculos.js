function calcular(){
    let media= document.getElementById("final").value
    quantoPrecisa=-((media*0.6)-5)/0.4
    var valorfinal= Math.round(quantoPrecisa * 10)/10
    console.log(valorfinal)
    document.getElementById("notadafinal").innerHTML=valorfinal+" ;" +" " + "Boa Sorte :)"
}