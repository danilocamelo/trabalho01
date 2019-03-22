function iniciar(){
    var inpnum = document.createElement("input");
    inpnum.type = "number";
    inpnum.name = "num";
    inpnum.id = "num";
    document.body.appendChild(inpnum);
    
    var btncalc = document.createElement('button');
    btncalc.setAttribute('type','button');
    btncalc.setAttribute("onclick","calcular()");
    btncalc.appendChild(document.createTextNode('Calcular'));
    btncalc.name = "btncalc";
    btncalc.id = "btncalc";
    document.body.appendChild(btncalc);

    document.getElementById('inic').disabled=true;
}

function calcular(){
    var table = document.createElement("table");
    var tBody = document.createElement("tbody");
    var num1 = document.getElementById("num").value;
	for(var i=0; i<=10;i++){
        var tr = document.createElement("tr");
		var tdnum1 = document.createElement("td");
		var tdmult = document.createElement("td");
		var tdnum2 = document.createElement("td");
		var tdigual = document.createElement("td");
		var tdres = document.createElement("td");
        tdnum1.innerHTML = num1;
		tdmult.innerHTML = "*";
		tdnum2.innerHTML = i;
		tdigual.innerHTML = "=";
        tdres.innerHTML = num1*i;
        tr.appendChild(tdnum1);
		tr.appendChild(tdmult);
		tr.appendChild(tdnum2);
		tr.appendChild(tdigual);
		tr.appendChild(tdres);
		tBody.appendChild(tr);
    }

    table.appendChild(tBody);
	var div = document.querySelector(".tabela");
    div.appendChild(table);
}