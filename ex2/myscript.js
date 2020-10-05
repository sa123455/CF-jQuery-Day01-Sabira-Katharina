$("form").submit(function(e) {

	//e.preventDefault();
	
	

});


// 1. remove the form from the page
//$("form").remove();

// 2. Create 5 new DIVs in the article element
for (var i = 0; i < 5; i++) {
	var newDiv = $("<div>New Div</div><br>");
	$("article").prepend(newDiv);
}

// 3. Within the input field change the value to "Search for..."
var newValue = "Search for...";
$("input#msg").val(newValue);

// 4. Add a class name of "box" to each new DIV
$("article div").addClass("box");

// 5. Change the link to "www.codefactory.wien"
$("footer a").attr("href", "https://www.codefactory.wien")




	