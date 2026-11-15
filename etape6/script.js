"use strict";
let lignes = 0;
let total_points = 0;

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
    total_points += points;
    doInsertRowTable(lignes, nom, prenom, points);
    update_summary();
}
function ConsoleTableau() {
    console.log(persons.map(p => ({
        nom: p.nom,
        prenom: p.prenom,
        points: p.points

    })));
}

function update_summary() {
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");

    element_lignes.innerText = `${lignes} ligne(s)`;
    element_points.innerText = `Total Point(s) = ${total_points}`;
}

function doNewData() {
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    const points = parseInt(elt_points.value);

    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        alert("Formulaire incomplet !");
    } else {
        doInsert(nom, prenom, points);
        persons.push(new Person(lignes, nom, prenom, points));
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";
    }
}

function deleteRow() {
    if (lignes === 0) {
        alert("Le Tableau est vide .");
        return;
    }

     const checkboxes = document.querySelectorAll("#table_container table input[type='checkbox']:checked");

    if (checkboxes.length === 0) {
        alert("Sélectionnez au moins une lignes.");
        return;
    }

    if (!confirm("Désirez vous supprimer les lignes sélectionnées?")) {
        return;
    }

    const rows = document.querySelectorAll(".row");
    rows.forEach((row, index) => {
        const checkbox = row.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            const points = parseInt(row.cells[3].innerText);
            total_points -= points;
            lignes--;
            row.remove();

            const num = parseInt(row.cells[0].innerText);
            persons = persons.filter(p => p.num !== num);

            row.remove();
        }
    });
    update_summary();

}

