function makeGrid() {

// Your code goes here!
	var rows = $('#input_height').val();
	var columns = $('#input_width').val();

	var grid = $("#pixel_canvas");
  
	grid.children().remove();
  
	for(var r = 0; r < rows; r++) {
			grid.append('<tr></tr>');
	  for (var w = 0; w < columns; w++) {
			  grid.children().last().append('<td></td>');
	  }
  }

	grid.on('click', 'td', function() {
		var color = $('input[type="color"]').val();
		$(this).attr('bgcolor', color);
	});
};
$('input[type="submit"]').click(function(e) {
	e.preventDefault();
	makeGrid();	
});function makeGrid() {

// Your code goes here!
	var rows = $('#input_height').val();
	var columns = $('#input_width').val();
	var grid = $("#pixel_canvas");

	//Removing prior grid.
	grid.children().remove();
  
  	//Looping through rows adding <tr> and then columns adding <td> for width.
	for(var r = 0; r < rows; r++) {
			grid.append('<tr></tr>');
	  for (var w = 0; w < columns; w++) {
			  grid.children().last().append('<td></td>');
	  }
  }
  	//Listener for click on the grid to change background color. 
	grid.on('click', 'td', function() {
		var color = $('input[type="color"]').val();
		$(this).attr('bgcolor', color);
	});
};
//Listener for submit to make the grid itself. 
$('input[type="submit"]').click(function(e) {
	e.preventDefault();
	makeGrid();	
});