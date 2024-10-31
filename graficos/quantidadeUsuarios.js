
async function quantidadedeUsuaios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
const res = await fetch(url);
const dados =await res.json();
const nomesDasResdes = Object.keys(dados);
const quantidadedeUsuaios = Object.volues(dados);

const infos =[
{
    x: nomesDasResdes,
    y: quantidadedeUsuaios,
    type: 'bar'

}



]

}