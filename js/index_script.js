function change_bg() {
	var colors = ["#fff599", "white", "#d6fbff", "#ffd6f1", "#dcd6ff", "#d6ffdb", "#dedede"];
	var roll = colors[Math.floor(Math.random()*colors.length)];
	document.body.style.backgroundColor = roll;
}

/*
function next_page(){
	alert();
	var current_s = document.title;
	var current = parseInt(current_s)
	var next = current+1
	window.location.href = next+'.html';
}

function prev_page(){
	var current_s = document.title;
	var current = parseInt(current_s)
	var next = current-1
	window.location.href = next+'.html';
}
*/