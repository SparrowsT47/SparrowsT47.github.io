
function actualizarReloj() {
    const reloj = document.getElementById('reloj');
    const zonaExclusionTime = new Date(); 
  
    
    let horas = zonaExclusionTime.getHours();
    const minutos = zonaExclusionTime.getMinutes().toString().padStart(2, '0');
    const segundos = zonaExclusionTime.getSeconds().toString().padStart(2, '0');
  
    
    const ampm = horas >= 12 ? 'PM' : 'AM';
  
    
    horas = horas % 12;
    horas = horas ? horas : 12; 
    const horaFormateada = horas.toString().padStart(2, '0');
  
    
    reloj.innerHTML = `Hora de la Zona: ${horaFormateada}:${minutos}:${segundos} ${ampm}`;
  }
  
  
  setInterval(actualizarReloj, 1000);
  
  
  actualizarReloj();
  