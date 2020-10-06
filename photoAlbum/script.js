var familyAlbum = JSON.parse(family);
console.table(familyAlbum);



$(document).ready(function() {



<<<<<<< HEAD
    for (i = 0; i < familyAlbum.length; i++) {
        //<div src= familyPhoto></div>

=======
    for (var i=0; i<familyAlbum.length; i++){
>>>>>>> b9c643b63fc4533afc56ac81d5b0271050aaebd6
        var familyPhoto = familyAlbum[i].img;
        console.log(familyPhoto);
        $("#mainDiv").append(`<div><img src='${familyPhoto}'></div>`);
    }


    




})