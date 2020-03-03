
function calculer()
{
    firstVar =parseFloat(document.getElementById('firstVar').value);
    secondeVar =parseFloat(document.getElementById('secondVar').value);
    resultat=firstVar+secondeVar;
    document.getElementById('resultat').innerHTML=resultat;
}