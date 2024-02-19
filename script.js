//DIA DE NASCIMENTO
var nasDia = document.getElementById('seldia') //select dia

for (var d = 1; d <= 31; d++) {
    var itemDia = document.createElement('option') //criado option
    itemDia.setAttribute('value', d)
    itemDia.innerText = d
    nasDia.appendChild(itemDia)
}

//MÊS DE NASCIMENTO
//TENTATIVA 01
/*var nasMes = document.getElementById('selmes') //select mes
var itemMes = document.createElement('option') //criado option

itemMes.innerText = 'Janeiro'
nasMes.appendChild(itemMes)/*

//TENTATIVA 02
/*var date = new Date
var mes = date.getMonth()
var nasMes = document.getElementById('selmes') //select mes

for (var m = mes; m <= 12; m++) {
    var itemMes = document.createElement('option')
    itemMes.innerText = m
    nasMes.appendChild(itemMes)
}*/

//ANO DE NASCIMENTO

var nasAno = document.getElementById('selano') //select ano

for (var x = 1930; x <= 2021; x++) {
    var itemAno = document.createElement('option') //criado option
    itemAno.setAttribute('value', x) //adicionado atributo value
    itemAno.innerText = x
    nasAno.appendChild(itemAno)
}