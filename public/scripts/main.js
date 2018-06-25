const app = {};
app.setup = function(){
    $("form").submit(function(e){
        e.preventDefault();

    });
}
app.giphy = function(){
    $("form").submit(function(e){
        $(".gifContainer").remove();
    });
    let input = $("#search").val()
    const xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=tPpWE5cGi1dp3jqXCaaySfNimuPGz9A4&limit=30`);
    xhr.done(function(response) {
        console.log(response);
        const gifs = response.data
        for (i in gifs){
            $(".main").append(`<div class="gifContainer"><img id="${[i]}" class="gif" src="${gifs[i].images.downsized_still.url}" /></div>`)
            $(".gif").on('click touchstart', function(){
                $(this).attr("src", `${gifs[this.id].images.original.url}`);
                $(this).css("opacity", "1");
            });
        }
    });
}


app.init = function(){
    app.setup();
    app.giphy();
}
$(function(){
    app.init();
  });  
