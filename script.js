
async function generateAdvice() {
    try {
        
        const response = await fetch('https://api.adviceslip.com/advice',{method:'GET'});
        const data = await response.json();
        console.log({response, data});
        const advice = data.slip;
      
        // Atualiza os textos no HTML
        document.querySelector('.advice-id').textContent = `Advice #${advice.id}`;
        document.querySelector('.advice-text').textContent = `"${advice.advice}"`;
        
    } catch (error) {
        console.log({error});
        
    }
  }