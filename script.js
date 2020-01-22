togglePlayers = true;

let createTable = function(){

     table = document.createElement("TABLE");

    let row1 = document.createElement("TR");
    row1.style.height = "15em";
    let row2 = document.createElement("TR");
    row2.style.height = "15em";
    let row3 = document.createElement("TR");
    row3.style.height = "15em";

    cel1 = document.createElement("TD");
    cel1.style.backgroundColor = "red";
    cel1.style.width = "15em";

    cel2 = document.createElement("TD");
    cel2.style.backgroundColor = "purple";
    cel2.style.width = "15em";

    cel3 = document.createElement("TD");
    cel3.style.backgroundColor = "green";
    cel3.style.width = "15em";

    cel4 = document.createElement("TD");
    cel4.style.backgroundColor = "orange";
    cel4.style.width = "15em";

    cel5 = document.createElement("TD");
    cel5.style.backgroundColor = "blue";
    cel5.style.width = "15em";

    cel6 = document.createElement("TD");
    cel6.style.backgroundColor = "pink";
    cel6.style.width = "15em";

    cel7 = document.createElement("TD");
    cel7.style.backgroundColor = "cyan";
    cel7.style.backgroundColor = "15em";

    cel8 = document.createElement("TD");
    cel8.style.backgroundColor = "chartreuse";
    cel8.style.width = "15em";

    cel9 = document.createElement("TD");
    cel9.style.backgroundColor = "silver";
    cel9.style.width = "15em";

    row1.appendChild(cel1);
    row1.appendChild(cel2);
    row1.appendChild(cel3);

    row2.appendChild(cel4);
    row2.appendChild(cel5);
    row2.appendChild(cel6);

    row3.appendChild(cel7);
    row3.appendChild(cel8);
    row3.appendChild(cel9);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);

    let content = document.getElementById("content");
    content.appendChild(table);

};



let onClickX = function(id){

    id.style.backgroundColor = "aqua";
};

let toggleTurns = function(id){

    if(togglePlayers === true){
        id.style.backgroundColor = "yellow";
        togglePlayers = false;
    } else {
        id.style.backgroundColor = "red";
        togglePlayers = true;
    }



}

