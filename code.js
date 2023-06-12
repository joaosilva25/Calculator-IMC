let weight=document.querySelector(".weight");
let height=document.querySelector(".height");
let nome=document.querySelector(".name");
let h1=document.querySelector("h1");
let presentation=document.querySelector('h6');


function calculoImc() {

    if (weight.value!=="" && height.value!=="" && nome.value!=="") {
        let weight_calc = weight.value;
        let height_calc = height.value;

        let convertHeight= parseFloat(height_calc);
        let convertWeight = parseFloat(weight_calc);

        /*Calculo IMC*/
        let calcImc=(convertWeight/(convertHeight*convertHeight));

        /*Quiz Atividade Física*/
        presentation.innerHTML=`<div class="quiz">
                                    <h2>Você Realiza algum tipo de Atividade Física?</h2>
                                    <div class="check">
                                        <button class="yes" onclick="Quiz1()">Sim</button>
                                        <button class="not" onclick="Quiz1()">Não</button>
                                    </div>
                                </div>`;

        h1.innerHTML=`<h1>já realizamos seu cálculo, agora nos responda 
        algumas perguntinhas para termos uma analise completa para você</h1>`;
    }

    else {
        presentation.innerHTML=`<h6 class="wait">Insira os dados para realização de seu cálculo</h6>`
    }



}

function Quiz1() {
    presentation.innerHTML=`<div class="quiz">
                                <h2>Quais são seus hábitos alimentares?</h2>
                                    <div class="check">
                                        <button class="yes" onclick="Quiz2()">Saudável</button>
                                        <button class="not" onclick="Quiz2()">Não Saudável</button>
                                    </div>
                            </div>`;
    }

function Quiz2() {
    presentation.innerHTML=`<div class="quiz">
                                <h2>Qual a frequência de ingestão de àgua?</h2>
                                    <div class="check">
                                        <button class="yes">Alta</button>
                                        <button class="not">Baixa</button>
                                    </div>
                            </div>`;

    h1.innerHTML=`<h1>( Alta ) acima de 1L por Dia, ( Baixa ) abaixo de 1L por Dia</h1>`;
}