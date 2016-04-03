"use strict";

/*
var acquerir = 1;
var dropzone_acquerir = 1;
var traiter = 2;
var dropzone_traiter = 2;
var communiquer = 3;
var dropzone_communiquer = 3;
var alimenter = 4;
var dropzone_alimenter = 4;
var distribuer = 5;
var dropzone_distribuer = 5;
var convertir = 6;
var dropzone_convertir = 6;
var transformer = 7;
var dropzone_transformer = 7;
var bouton ;

function valider () {
	while (bouton) {
		if ( acquerir == dropzone_acquerir ) {

    	alert("Juste");

		} else {

     	alert("Faux");

		}
	}
}

*/


function allowDrop(event) { //Autorise le drop
	event.preventDefault();
	return false;
}

function drag(event) { //Permet le déplacement des données d'images entre les dropzones
	event.dataTransfer.setData('text', event.target.id);
}

function drop(event) {
	event.preventDefault();

	var data = event.dataTransfer.getData('text'); //renvoie l'identité de l'image lachée
	var iddest = document.getElementById(event.target.id).id; //renvoie l'identité de la zone où l'image à été lachée
	var ctrldropzone=new RegExp("^dropzone","g"); //Servira à distinguer les dropzones des autres zones (s'il autres il y a)

	if (document.getElementById(iddest).tagName.toLowerCase() != 'img'){//Si la destination n'est pas une image

			if (!ctrldropzone.test(iddest) && iddest != "item-store"){//Si l'id n'est pas un bloc de destination commençant par 							 			dropzone ou n'est pas le bloc de stockage (grâce au ctrldropzone notamment !
			alert("Déplacement interdit !");
			}

			else {
			event.target.appendChild(document.getElementById(data));//Crée un "enfant" de l'image lachée dans la zone cible
			}
	}

	else { //Remplacement de l'élément draggable
			event.target.parentNode.appendChild(document.getElementById(data));
			document.getElementById("item_store").appendChild(document.getElementById(iddest));
	}
	return false;
}
