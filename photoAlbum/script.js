var familyAlbum = JSON.parse(family);
console.table(familyAlbum);



$(document).ready(function() {



    for (i = 0; i < familyAlbum.length; i++) {
        //<div src= familyPhoto></div>

        var familyPhoto = familyAlbum[i].img;
        //console.log(familyPhoto);
        $("#mainDiv").append(familyPhoto);

    }







})