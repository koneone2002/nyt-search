
$(document).ready(function() {


    // $("button").on("click", function() {
        
        var search = "Pandora&";

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + search + $.param({
          'api-key': "470411be8eaa44ef81ce85cf15e99bf8"
        });

           
            $.ajax({
            url: url,
            method: 'GET',
            }).done(function(result) {
            console.log(result);
            console.log(result.status);
            }).fail(function(err) {
            throw err;
            });
    });        

// }