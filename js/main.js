const distanza = parseInt(prompt("Quanti chilometri devi percorrere?") );
const eta = parseInt(prompt("Quanti anni hai?"));
const prezzoKm = 0.21;
const prezzoSenzaSconto = prezzoKm * distanza;

if (eta <= 18){
    document.getElementById('costo').innerHTML = `il prezzo del biglietto è ${(prezzoSenzaSconto / 100) * 80} euro `;   
}
else if (eta >=65){
    document.getElementById('costo').innerHTML = `il prezzo del biglietto è ${(prezzoSenzaSconto / 100) * 60} euro `;   
}
else{
    document.getElementById('costo').innerHTML = `il prezzo del biglietto è ${prezzoSenzaSconto} euro `;   
}