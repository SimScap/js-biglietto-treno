const distanza = parseInt(prompt("Quanti chilometri devi percorrere?"));
document.getElementById('distance').innerHTML = distanza;
const eta = parseInt(prompt("Quanti anni hai?"));
document.getElementById('age').innerHTML = eta;
const prezzoKm = 0.21;
let prezzoSenzaSconto = prezzoKm * distanza;

if (eta <= 18){
    document.getElementById('costo').innerHTML = `Il prezzo del biglietto è di ${((prezzoSenzaSconto / 100) * 80).toFixed(2)} Euro `;   
}
else if (eta >= 65){
    document.getElementById('costo').innerHTML = `Il prezzo del biglietto è di ${((prezzoSenzaSconto / 100) * 60).toFixed(2)} Euro `;   
}
else{
    document.getElementById('costo').innerHTML = `Il prezzo del biglietto è di ${prezzoSenzaSconto.toFixed(2)} Euro `;   
}


