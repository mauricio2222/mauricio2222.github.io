function reloj() {
    horareal = new Date()
    hora = horareal.getHours()
    minuto = horareal.getMinutes()
    segundo = horareal.getSeconds()

    comprobarsegundo = new String (segundo)
    if (comprobarsegundo.length == 1)
    segundo = "0" + segundo

    comprobarminuto = new String (minuto)
    if (comprobarminuto.length == 1)
    minuto = "0" + minuto
    
    comprobarhora = new String (hora)
    if (comprobarhora.length == 1)
    hora = "0" + hora
    
    verhora = hora + " : " + minuto + " : " + segundo
    document.reloj_javascript.reloj.value = verhora
    setTimeout("reloj()",1000)
}