var segundo=0.1;

function hide() {
    document.getElementById("resistor-table1").style.display = "none";
    document.getElementById("resistor-table2").style.display = "none";
    document.getElementById("resistor-table3").style.display = "none";
    document.getElementById("resistor-table4").style.display = "none";
    document.getElementById("regulador-tensao").style.display = "none";
    document.getElementById("form-capacitor").style.display = "none";
}
function brand1() {
    document.getElementById("resistor-table1").style.display = "inline";
    document.getElementById("resistor-table2").style.display = "none";
    document.getElementById("resistor-table3").style.display = "none";
    document.getElementById("resistor-table4").style.display = "none";
    document.getElementById("regulador-tensao").style.display = "none";
    document.getElementById("form-capacitor").style.display = "none";
}
function brand2() {
    document.getElementById("resistor-table1").style.display = "none";
    document.getElementById("resistor-table2").style.display = "inline";
    document.getElementById("resistor-table3").style.display = "none";
    document.getElementById("resistor-table4").style.display = "none";
    document.getElementById("regulador-tensao").style.display = "none";
    document.getElementById("form-capacitor").style.display = "none";
}
function brand3() {
    document.getElementById("resistor-table1").style.display = "none";
    document.getElementById("resistor-table2").style.display = "none";
    document.getElementById("resistor-table3").style.display = "inline";
    document.getElementById("resistor-table4").style.display = "none";
    document.getElementById("regulador-tensao").style.display = "none";
    document.getElementById("form-capacitor").style.display = "none";
}
function brand5() {
    document.getElementById("resistor-table1").style.display = "none";
    document.getElementById("resistor-table2").style.display = "none";
    document.getElementById("resistor-table3").style.display = "none";
    document.getElementById("resistor-table4").style.display = "inline";
    document.getElementById("regulador-tensao").style.display = "none";
    document.getElementById("form-capacitor").style.display = "none";
}
function pilha() {
    document.getElementById("resistor-table1").style.display = "none";
    document.getElementById("resistor-table2").style.display = "none";
    document.getElementById("resistor-table3").style.display = "none";
    document.getElementById("resistor-table4").style.display = "none";
    document.getElementById("regulador-tensao").style.display = "inline";
    document.getElementById("form-capacitor").style.display = "none";
}
function cliqueCapacitor() {
    document.getElementById("resistor-table1").style.display = "none";
    document.getElementById("resistor-table2").style.display = "none";
    document.getElementById("resistor-table3").style.display = "none";
    document.getElementById("resistor-table4").style.display = "none";
    document.getElementById("regulador-tensao").style.display = "none";
    document.getElementById("form-capacitor").style.display = "inline";
}

function faixaP(brand) {
    if (brand==1) brand="brand1";
    else if(brand==2) brand="brand2";  
    else if(brand==3) brand="brand3"; 
    else if(brand==5) brand="brand5";
    document.getElementById(brand).style.backgroundColor = "black"; document.getElementById(brand).style.borderColor = "black"; resistTot(); }
function faixaM(brand) {
    if (brand==1) brand="brand1";
    else if(brand==2) brand="brand2";  
    else if(brand==3) brand="brand3"; 
    else if(brand==5) brand="brand5";
    document.getElementById(brand).style.backgroundColor = "brown"; document.getElementById(brand).style.borderColor = "brown"; resistTot(); }
function faixaVm(brand) {
    if (brand==1) brand="brand1";
    else if(brand==2) brand="brand2";
    else if(brand==3) brand="brand3"; 
    else if(brand==5) brand="brand5";
    document.getElementById(brand).style.backgroundColor = "red"; document.getElementById(brand).style.borderColor = "red"; resistTot(); }
function faixaVd(brand) { 
    if (brand==1) brand="brand1";
    else if(brand==2) brand="brand2";  
    else if(brand==3) brand="brand3"; 
    else if(brand==5) brand="brand5";
    document.getElementById(brand).style.backgroundColor = "green"; document.getElementById(brand).style.borderColor = "green"; resistTot(); }
function faixaL(brand) { 
    if (brand==1) brand="brand1";
    else if(brand==2) brand="brand2";  
    else if(brand==3) brand="brand3"; 
    else if(brand==5) brand="brand5";
    document.getElementById(brand).style.backgroundColor = "orange"; document.getElementById(brand).style.borderColor = "orange"; resistTot(); }
function faixaAm(brand) { 
    if (brand==1) brand="brand1";
    else if(brand==2) brand="brand2";  
    else if(brand==3) brand="brand3"; 
    else if(brand==5) brand="brand5";
    document.getElementById(brand).style.backgroundColor = "yellow"; document.getElementById(brand).style.borderColor = "yellow"; resistTot(); }
function faixaAz(brand) { 
    if (brand==1) brand="brand1";
    else if(brand==2) brand="brand2";  
    else if(brand==3) brand="brand3"; 
    else if(brand==5) brand="brand5";
    document.getElementById(brand).style.backgroundColor = "blue"; document.getElementById(brand).style.borderColor = "blue"; resistTot(); }
function faixaVi(brand) { 
    if (brand==1) brand="brand1";
    else if(brand==2) brand="brand2";  
    else if(brand==3) brand="brand3"; 
    else if(brand==5) brand="brand5";
    document.getElementById(brand).style.backgroundColor = "violet"; document.getElementById(brand).style.borderColor = "violet"; resistTot(); }
function faixaC(brand) { 
    if (brand==1) brand="brand1";
    else if(brand==2) brand="brand2";  
    else if(brand==3) brand="brand3"; 
    else if(brand==5) brand="brand5";
    document.getElementById(brand).style.backgroundColor = "gray"; document.getElementById(brand).style.borderColor = "gray"; resistTot(); }
function faixaB(brand) { 
    if (brand==1) brand="brand1";
    else if(brand==2) brand="brand2";  
    else if(brand==3) brand="brand3"; 
    else if(brand==5) brand="brand5";
    document.getElementById(brand).style.backgroundColor = "white"; document.getElementById(brand).style.borderColor = "white"; resistTot(); }
function faixaG(brand) { 
    if (brand==1) brand="brand1";
    else if(brand==2) brand="brand2";  
    else if(brand==3) brand="brand3"; 
    else if(brand==5) brand="brand5";
    document.getElementById(brand).style.backgroundColor = "gold"; document.getElementById(brand).style.borderColor = "gold"; resistTot(); }
function faixaS(brand) { 
    if (brand==1) brand="brand1";
    else if(brand==2) brand="brand2";  
    else if(brand==3) brand="brand3"; 
    else if(brand==5) brand="brand5";
    document.getElementById(brand).style.backgroundColor = "silver"; document.getElementById(brand).style.borderColor = "silver"; resistTot(); }

function resistTot() {
    let resistTot;
    let append="";
    let percentage="";
    let brand1 = document.getElementById("brand1").style.backgroundColor;
    if (brand1) {
        switch (brand1) {
            case "black":
                resistTot = "0";
                break;
            case "brown":
                resistTot = "1";
                break;
            case "red":
                resistTot = "2";
                break;
            case "orange":
                resistTot = "3";
                break;
            case "yellow":
                resistTot = "4";
                break;
            case "green":
                resistTot = "5";
                break;
            case "blue":
                resistTot = "6";
                break;
            case "violet":
                resistTot = "7";
                break;
            case "gray":
                resistTot = "8";
                break;
            case "white":
                resistTot = "9";
                break;
            default:
                break;
        }
        let brand2 = document.getElementById("brand2").style.backgroundColor;
        switch (brand2) {
            case "black":
                resistTot += '0';
                break;
            case "brown":
                resistTot += '1';
                break;
            case "red":
                resistTot += '2';
                break;
            case "orange":
                resistTot += '3';
                break;
            case "yellow":
                resistTot += '4';
                break;
            case "green":
                resistTot += '5';
                break;
            case "blue":
                resistTot += '6';
                break;
            case "violet":
                resistTot += '7';
                break;
            case "gray":
                resistTot += '8';
                break;
            case "white":
                resistTot += '9';
                break;
            default:
                break;
        }
        let brand3 = document.getElementById("brand3").style.backgroundColor;
        switch (brand3) {
            case "brown":
                resistTot += '0';
                break;
            case "red":
                resistTot += "00";
                break;
            case "orange":
                append = "K";
                break;
            case "yellow":
                resistTot += "0";
                append="K";
                break;
            case "green":
                resistTot += "00";
                append="K";
                break;
            case "blue":
                append="M";
                break;
            case "violet":
                resistTot += "0";
                append="M";
                break;
            case "gray":
                resistTot += "00";
                append="M";
                break;
            case "white":
                append="G";
                break;
            case "gold":
                resistTot = (parseInt(resistTot) / 10)
                break;
            case "silver":
                resistTot = (parseInt(resistTot) / 100)
                break;
            default:
                break;
        }
        let brand5 = document.getElementById("brand5").style.backgroundColor;
        if (brand5) {
            switch (brand5) {
                case "brown":
                    percentage = " ± 1%";
                    break;
                case "red":
                    percentage = " ± 2%";
                    break;
                case "green":
                    percentage = " ± 0.5%";
                    break;
                case "blue":
                    percentage = " ± 0.25%";
                    break;
                case "violet":
                    percentage = " ± 0.1%";
                    break;
                case "gray":
                    percentage = " ± 0.05%";
                    break;
                case "gold":
                    percentage = " ± 5%";
                    break;
                case "silver":
                    percentage = " ± 0.01%";
                    break;
                default:
                    break;
            }
        }
        document.getElementById("resist-tot").innerText = resistTot;
        if (percentage.length>1) {
            percentage+=" Ω";
            document.getElementById("percentage").innerText = percentage;
            document.getElementById("append").innerText = append;
        }
        else{
            append+=" Ω";
            document.getElementById("append").innerText = append;
        }
    }
}

function tensao() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("tensao");
    output.innerHTML = slider.value+" V";
    if(document.getElementById("chave").style.borderRightColor!="black"){
        document.getElementById("tensao-capac").innerHTML= slider.value;
    }
}

function capacitor() {
    let valor = document.getElementById('input-capacitor');
    capacitancia.innerHTML = valor.value+ "μF";
}

function select(){
    let tensao=parseFloat(document.getElementById("tensao").innerHTML);
    let resistencia=parseFloat(document.getElementById("resist-tot").innerHTML);
    let capacitancia=parseFloat(document.getElementById("capacitancia").innerHTML);
    if(document.getElementById("chave").style.borderRightColor=="transparent" && tensao>0 && capacitancia>0 && resistencia>0){
        hide();
        document.getElementById("chave").style.borderRight="0.4em solid black";
        document.getElementById("chave").style.borderBottom="0";
        document.getElementById("chave").style.borderBottomColor="transparent";
        setTimeout(tensaCapac,1000); 
    }
    else{
        document.getElementById("chave").style.borderRight="0";
        document.getElementById("chave").style.borderRightColor="transparent";
        document.getElementById("chave").style.borderBottom="0.4em solid black";
        document.getElementById("tensao-capac").innerHTML=parseFloat(document.getElementById("tensao").innerHTML);
        resetCanvas();
    }
}

function tensaCapac(){
    if(document.getElementById("chave").style.borderRightColor=="black"){
        let multiplier=1;
        let append = document.getElementById("append").innerHTML;
        switch (append) {
            case "K":
                multiplier=1000
                break;
            case "M":
                multiplier=1000000
                break;
            case "G":
                multiplier=1000000000
                break;
            default:
                break;
        }
        let tensao=parseFloat(document.getElementById("tensao").innerHTML);
        let resistencia=parseFloat(document.getElementById("resist-tot").innerHTML);
        let capacitancia=parseFloat(document.getElementById("capacitancia").innerHTML);
        document.getElementById("tensao-capac").innerHTML=((tensao)*((Math.exp(1))**(-1*(segundo/((resistencia*(multiplier))*(capacitancia*(10**(-6))))))).toFixed(5));
        segundo+=0.1;
        if(parseFloat(document.getElementById("tensao-capac").innerHTML)>0.00001)
            setTimeout(tensaCapac, 1000);
        resetCanvas();
        generateData();
    }
}

function generateData() {
    var xValues = [];
    var yValues = [];   
    let multiplier=1;
    let append = document.getElementById("append").innerHTML;
    switch (append) {
        case "K":
            multiplier=1000
            break;
        case "M":
            multiplier=1000000
            break;
        case "G":
            multiplier=1000000000
            break;
        default:
            break;
    }
    let tensao=parseFloat(document.getElementById("tensao").innerHTML);
    let resistencia=parseFloat(document.getElementById("resist-tot").innerHTML);
    let capacitancia=parseFloat(document.getElementById("capacitancia").innerHTML);
    for (let x = 0; x <= segundo; x += 0.1) {
        yValues.push(eval((tensao)*((Math.exp(1))**(-1*(x/((resistencia*(multiplier))*(capacitancia*(10**(-6))))))).toFixed(4)));
        xValues.push(x.toFixed(1));
    }
    renderChart(yValues, xValues);
}
function renderChart(yValues, xValues) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        animationEnabled: true,
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                fill: false,
                pointRadius: 2,
                borderColor: "rgb(75, 192, 192)",
                data: yValues
            }]
        },    
        options: {
            legend: {display: false}
        }
    });
}

function resetCanvas(){
    $('#myChart').remove(); // this is my <canvas> element
    $('#graph-container').append('<canvas id="myChart"></canvas>');
  };