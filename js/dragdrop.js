(function() {

    var dndHandler = {

        draggedElement: null, // Propriété pointant vers l'élément en cours de déplacement

        applyDragEvents: function(element) {

            element.draggable = true;

            var dndHandler = this; // Cette variable est nécessaire pour que l'événement « dragstart » ci-dessous accède facilement au namespace « dndHandler »

            element.addEventListener('dragstart', function(e) {
            	dndHandler.draggedElement = e.target;
            	//empêche les images d'être draggable
            	if($(e.target).is('img')){
            		//on fait rien
            	}else{
            		var i =0;
	            	while(!$(dndHandler.draggedElement).hasClass('draggable') && i<4){
	            		dndHandler.draggedElement = dndHandler.draggedElement.parentNode;
	            		i++;
	            	}
	                 // On sauvegarde l'élément en cours de déplacement
	                e.dataTransfer.setData('text/plain', ''); // Nécessaire pour Firefox
	            	}
            });

            element.addEventListener('drop', function(e) {
		        e.stopPropagation(); // On stoppe la propagation de l'événement pour empêcher la zone de drop d'agir
		    });

        },

        applyDropEvents: function(dropper) {

            dropper.addEventListener('dragover', function(e) {
                e.preventDefault(); // On autorise le drop d'éléments
                if(dndHandler.draggedElement)
                this.className = 'film_connexion_structure dropper drop_hover'; // Et on applique le style adéquat à notre zone de drop quand un élément la survole
            });

            dropper.addEventListener('dragleave', function() {
                this.className = 'film_connexion_structure dropper'; // On revient au style de base lorsque l'élément quitte la zone de drop
            });

            var dndHandler = this; // Cette variable est nécessaire pour que l'événement « drop » ci-dessous accède facilement au namespace « dndHandler »

            dropper.addEventListener('drop', function(e) {
            		var draggedEle = dndHandler.draggedElement;
            		if($(draggedEle).length>=0){
	            		//on boucle jusqu'à 4 juste pour être sûr de parcourir tous les enfants de l'élément draggable
		              	var target = e.target,
		                	draggedElement = draggedEle, // Récupération de l'élément concerné
		                	clonedElement = draggedElement.cloneNode(true); // On créé immédiatement le clone de cet élément

		                while (target.className.indexOf('dropper') == -1) { // Cette boucle permet de remonter jusqu'à la zone de drop parente
		                    target = target.parentNode;
		                }

		                target.className = 'film_connexion_structure dropper'; // Application du style par défaut

		                clonedElement = target.appendChild(clonedElement); // Ajout de l'élément cloné à la zone de drop actuelle
		                dndHandler.applyDragEvents(clonedElement); // Nouvelle application des événements qui ont été perdus lors du cloneNode()

		                draggedElement.parentNode.removeChild(draggedElement); // Suppression de l'élément d'origine
	            	}
            });

        }

    };


    $(document).ready(function () {
	    var elements = document.querySelectorAll('.draggable'),
	        elementsLen = elements.length;

	    for (var i = 0; i < elementsLen; i++) {
	        dndHandler.applyDragEvents(elements[i]); // Application des paramètres nécessaires aux éléments déplaçables
	    }

	    var droppers = document.querySelectorAll('.dropper'),
	        droppersLen = droppers.length;

	    for (var i = 0; i < droppersLen; i++) {
	        dndHandler.applyDropEvents(droppers[i]); // Application des événements nécessaires aux zones de drop
	    }

	});

})();