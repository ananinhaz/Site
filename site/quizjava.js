/* Aula 20 MaiaQuiz  */

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')



// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Na criação do semáforo no site tinkercad, é inserido uma quantidade de tempo para a troca das luzes, no código consta:",
    alternativaA : "800 milissegundos",
    alternativaB : "900 milissegundos",
    alternativaC : "1000 milissegundos",
    correta      : "1000 milissegundos",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Um robô é um sistema integrado somente de sensores, manipuladores, sistemas de controle, fontes de energia e software que trabalham de forma interdependente para realizar tarefas.",
    alternativaA : "Verdadeiro",
    alternativaB : "Falso",
    alternativaC : "Ambas Verdadeiras",
    correta      : "Falso",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "A palavra robô tem origem na palavra tcheca “robota”. Qual opção a seguir convém com o significado da palavra:",
    alternativaA : "trabalho forçado",
    alternativaB : "facilidade",
    alternativaC : "manuseio de criaturas",
    correta      : "trabalho forçado",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "I. Os robôs articulados são robôs cuja forma se assemelha a um braço humano II. O componente braço do robô é conectado à base com juntas de torção, ou eixos, o que possibilita a interface e comunicação com o software III. Esse tipo de robô é muito utilizado em indústrias IV. Substitui trabalhos manuais repetitivos, como a embalagem de alimentos, fundição de metais e manuseio de materiais",
    alternativaA : "FVFF",
    alternativaB : "VFVV",
    alternativaC : "VFVF",
    correta      : "VFVV",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "A Luz de emergência desenvolvida no site tinkercad constava com os seguintes componentes:",
    alternativaA : "Arduino, Led, resistor e sensor LDR",
    alternativaB : "Led, Arduino, sensor LDR e capacitador",
    alternativaC : "Resistor, Led, resistor",
    correta      : "Arduino, Led, resistor e sensor LDR",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questÃµes " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("QuestÃ£o " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta ðŸ˜Š"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada ðŸ˜¢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}