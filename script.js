		document.getElementById("v1").addEventListener("click", functionScopeExample);
		document.getElementById("v2").addEventListener("click", unAutreFunctionScopeExample);
		document.getElementById("v3").addEventListener("click", canIAccessThoseVariables);
		document.getElementById("v4").addEventListener("click", blockScopeExample);

	function functionScopeExample(){
		var myFirstName = "Nikki"; //use var sparingly because you can redeclare the same var which is problematic, let and const are much bettah
		console.log("My first name is " + myFirstName);

		let myMiddleName = "Gerard"; //let will not allow you to redeclare a let; you can update the value but not redeclare nada. lets have local scope.
		console.log("My middle name is " + myMiddleName);

		const myLastName = "Camus"; //Also, cannot redeclare const because they constant 
		console.log("My last name is " + myLastName);
	}//end functionScopeExample function

	function unAutreFunctionScopeExample(){
		//all of these are local so although they're the same names as in the last function they only exist within this function and same with the last one.
		var myFirstName = "Roger";
		let myMiddleName = "Rufus";
		const myLastName = "Weasley"; 

		console.log("My full name is " + myFirstName + " " + myMiddleName + " " + myLastName);
	} //end unAutreFunctionScopeExample function

	function canIAccessThoseVariables(){
		console.log("No you can't because they are all local to the previous functions");
	}//end canIAccessThoseVariables function

	function blockScopeExample(){
		var myLastName = "Klein";

		if(myLastName == "Klein"){
			let myFirstName = "Joon";
			console.log("Hey " + myFirstName + " " + myLastName);
		}//end if
	} //end blockScopeExample();
