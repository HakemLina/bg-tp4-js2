"use strict";
let lignes = 0;
function doInsertRowTable(num, nom, prenom, point) {

    const table = document.querySelector("#table_container table");

    const row = document.createElement("tr");
    row.setAttribute("class", "row");

    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = point;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chbkbox");

    row.append(col1);
    row.append(col2);
    row.append(col3);
    row.append(col4);
    row.append(col5);

    table.append(row);
}



 
class Person {
    constructor(num, nom, prenom, points) {
        this.num = num;
        this.nom = nom;
        this.prenom = prenom;
        this.points = points;
    }
}


let persons = [
    new Person(1, "nom-1", "prenom-1", 5),
    new Person(2, "nom-2", "prenom-2", 10),
    new Person(3, "nom-3", "prenom-3", 15)
];

init();

function init() {

    for (let p of persons) {
        doInsert(p.nom, p.prenom, p.points);
    }

}

function doInsert(nom, prenom, points) {

    lignes++;

    doInsertRowTable(lignes, nom, prenom, points);

}
function ConsoleTableau(){
     console.log(persons);
}
