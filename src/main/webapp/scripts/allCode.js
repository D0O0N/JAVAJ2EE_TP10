
$(document).ready(// Exécuté à la fin du chargement de la page
    function(){
        console.log("coucou");
        fillCodeSelector();
    }
    );
    function fillCodeSelector(){
        // On fait un appel AJAX pour récuperer les codes
	$.ajax({
            url: "ReturnallCode",
            dataType: "json",
            error: showError,
            success: // La fonction qui traite les résultats
                function (result) {
                                // Le code source du template est dans la page
                                var template = $('#codesTemplate').html();
                                // On combine le template avec le résultat de la requête
                                var processedTemplate = Mustache.to_html(template, result);
                                // On affiche la liste des options dans le select
                                $('#codes').html(processedTemplate);
                            }
                	
                
        });			
    }
    
    function addCode(){
        // On fait un appel AJAX pour chercher les clients de cet état
        $.ajax({
                url: "AddCode",
                data: $("#codeForm").serialize(),
                dataType: "json",
                error: showError,
                success: // La fonction qui traite les résultats
                    function () {
                            console.log("SUPER");
                            fillCodeSelector();                        
                    }
                        
                
        });			
    }
    function delCode(){
        
    }

        // Fonction qui traite les erreurs de la requête
    function showError(xhr, status, message) {
            $("#erreur").html("Erreur: " + status + " : " + message);
    }
    

   



