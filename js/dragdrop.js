$(document).ready(function () {

	document.querySelector('.film_connexion_structure').addEventListener('dragover', function(e) {
	    e.preventDefault(); // Annule l'interdiction de drop
	});

	document.querySelector('.film_connexion_structure').addEventListener('drop', function(e) {
	    e.preventDefault(); // Cette méthode est toujours nécessaire pour éviter une éventuelle redirection inattendue
	    console.log('success');
	});

	document.querySelector('.film_added_element').addEventListener('dragstart', function(e) {
	    e.dataTransfer.setData('text/plain', "Ce texte sera transmis à l'élément HTML de réception");
	});

});