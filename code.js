let weight=document.querySelector(".weight");
let height=document.querySelector(".height");
let nome=document.querySelector(".name");
let h1=document.querySelector("h1");
let presentation=document.querySelector('h6');
let info=document.querySelector(".info")
let submit=document.querySelector(".submit")


function calculoImc() {

    if (weight.value!=="" && height.value!=="") {
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
        submit.style.display="none";
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
                                        <button class="yes" onclick="IMC()">Alta</button>
                                        <button class="not" onclick="IMC()">Baixa</button>
                                    </div>
                            </div>`;

    h1.innerHTML=`<h1>( Alta ) acima de 1L por Dia, ( Baixa ) abaixo de 1L por Dia</h1>`;
}


function IMC() {

    let weight_calc = weight.value;
    let height_calc = height.value;

    weight_calc = weight_calc.replace(',','.');
    height_calc = height_calc.replace(',','.');

    let convertHeight= parseFloat(height_calc);
    let convertWeight = parseFloat(weight_calc);

    /*Calculo IMC*/
    let calcImc=(convertWeight/(convertHeight*convertHeight));
    calcImc = calcImc.toFixed(2);

    if (calcImc>0 && calcImc<=18.5) {
        presentation.innerHTML=`<div class="result">
                                    <div class="result_intern d-flex flex-column">
                                        <img src="assets/images/blue.png"></img>
                                        <h3 class="text-center">Magreza</h3>
                                        <h7>IMC está entre 0 e 18,5</h7>
                                        <h7>Seu IMC é dê <strong>${calcImc}</strong></h7>
                                    </div>
                                </div>`
        h1.innerHTML="";
        info.style.backgroundColor="#387C99";
        }

    else if (calcImc>18.5 && calcImc<=24.9) {
        presentation.innerHTML=`<div class="result">
                                    <div class="result_intern d-flex flex-column">
                                        <img src="assets/images/green.png"></img>
                                        <h3 class="text-center">Normal</h3>
                                        <h7>IMC está entre 18,5 e 24,9</h7>
                                        <h7>Seu IMC é dê <strong>${calcImc}</strong></h7>
                                    </div>
                                </div>`
        h1.innerHTML="";
        info.style.backgroundColor="#17C671";
        }

    else if (calcImc>24.9 && calcImc<=30) {
        presentation.innerHTML=`<div class="result">
                                    <div class="result_intern d-flex flex-column">
                                        <img src="assets/images/yellow.png"></img>
                                        <h3 class="text-center">Sobrepeso</h3>
                                        <h7>IMC está entre 24,9 e 30</h7>
                                        <h7>Seu IMC é dê <strong>${calcImc}</strong></h7>
                                        </div>
                                    </div>`
        h1.innerHTML="";
        info.style.backgroundColor = "#FFD426";
        }  
        
    else if (calcImc>30 && calcImc<=99) {
        presentation.innerHTML=`<div class="result">
                                    <div class="result_intern d-flex flex-column">
                                        <img src="assets/images/red.png"></img>
                                        <h3 class="text-center">Sobrepeso</h3>
                                        <h7>IMC está entre 30 e 99</h7>
                                        <h7><strong>Seu IMC é dê ${calcImc}</strong></h7>
                                        </div>
                                    </div>`
            h1.innerHTML="";
            info.style.backgroundColor = "#FF2F38";
            }  


}

function back() {
    location.reload();

}