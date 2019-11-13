$(document).ready(// Exécuté à la fin du chargement de la page
    function(){
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
                function(result) {
                    // Pour chaque état dans le résultat
                    $.each(result.records, 
                        function(codeIndex) {
                            // On ajoute une option dans le select
                            var Code = result.records[codeIndex];
                            var option = new Option(Code, Code);
                            //var option = new Option(stateCode, stateCode, stateIndex === 0, stateIndex === 0);
                            select.append($(option));
                        }
                    );
                    // On initialise l'affichage 
                    showCode();		
                }
        });			
    }
    function showCode(){
        // On fait un appel AJAX pour chercher les clients de cet état
        $.ajax({
                url: "ReturnAllCode",
                dataType: "json",
                success: // La fonction qui traite les résultats
                        function(result) {
                                var template = $("#codes").html("<p>Hello</p>");
                                console.log("Coucou");
                                $("#codes").empty();
                                $("<p>Hello</p>").appendTo("#code");
                                $("#codes").add(template);
                                // On convertit les enregistrements en table HTML
                                $.jsontotable(result.records, {id: "#codes", header: false});
                        },
                error: showError
        });				
        }
    function addCode(){
        
    }
    function delCode(){
        
    }

        // Fonction qui traite les erreurs de la requête
    function showError(xhr, status, message) {
            $("#erreur").html("Erreur: " + status + " : " + message);
    }
   



