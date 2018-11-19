	window.onerror = function(err) {
    	console.log("syntax error");
    	document.getElementById("display").value = "Syntax Error";
    };

	function total() {
		var equation = document.getElementById("display").value;
		console.log(equation);
		if (equation == ""){
			document.getElementById('display').value = 0;
		}else{
			var ans = eval(equation);
			console.log(ans);
			document.getElementById('display').value = ans;
		}
	}

	  function backspace() {
	    console.log("backspace")
	    var string  = document.getElementById('display').value;
	    document.getElementById('display').value=string.substring(0,string.length -1);
	  
	  }

