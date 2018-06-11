$(document).ready(function () {
    $.get("https://pokeapi.co/api/v2/pokemon.json").then(function (json) {
        let text = json.results;

        //$("#output").text(text.toString());
        let target = $("#output");
        //list.html(data);

        for (i = 0; i < 10; i++) { //Displays top 10
            
        $.get(text[i].url).then(function (poke) {
            //for (i=0; i<text.length; i++) { //If you want to display all instead
            console.log(poke.name);
           
            target.append(
                '<div class="poke" id = '+i+'><h2>'+poke.name+'</h2> <img src="'+poke.sprites.front_default+'"/> </div>'
            );
            $('#'+i).hide();
            });
            
        }
        $('#loading').hide();
        $('.poke').show();
    });
});