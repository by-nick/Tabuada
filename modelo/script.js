function calcular(){
   var num = document.getElementById('txtnum')
   var res = document.getElementById('res')
   var tab = document.getElementById('seltab')
   
    //se valor nao for inserido
   if (num.value.length == 0){
    alert(`[ERRO!] Valor inválido`) 
   }else{
    //converte string em numero
    var n = Number(num.value)
    //antes de dar o resultado, ele limpa a tela, para nao ficar poluido
    tab.innerHTML = ''

    //repetição
    for (var c = 1; c<=10; c++){
        //cria um item de html de forma dinamica
        var item = document.createElement('option')

        //texto que aparecerá em item
        item.text = `${n} X ${c} = ${c*n}`

        //tab tem item como filho, assim mostrando os resultados na tela
        tab.appendChild(item)

        //os values sao mais usados para liguagens php, entao usa-se caso faça parte de uma empresa
        item.value = `tab${c}`
    }
   }
}