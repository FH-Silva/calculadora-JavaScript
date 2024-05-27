function funcaoJS(calc, escolhas){
    var i, caixa, botoesFilho;
    
    caixa = document.getElementsByClassName("caixa");
    
    for(i = 0; i < caixa.length; i++){
        caixa[i].style.display = "none";
    }

    botoesFilho = document.getElementsByClassName("botoesFilho");
    for(i = 0; i < botoesFilho.length; i++){
        botoesFilho[i].className = botoesFilho[i].className.replace(" active", "");
    }

    document.getElementById(escolhas).style.display = "block";
    calc.currentTarget.className += " active";
}

document.getElementById("btnF1").click();