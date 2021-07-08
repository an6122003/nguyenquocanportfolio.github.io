function SetMode(mode_chosen){
	if (mode_chosen == "light"){
		let a = document.getElementById("ColourMode")
		a.href = "default.css" 
	}

	if (mode_chosen == "dark"){
		let a = document.getElementById("ColourMode")
		a.href = "dark.css" 
	}
}

let mode = document.getElementsByClassName("mode-circle")

for (var i=0; mode.length > i; i++){
	mode[i].addEventListener("click", function(){
		let mode_chosen = this.dataset.mode
		SetMode(mode_chosen)
	})
} 




