var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
	// This function will display the specified tab of the form ...
	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	// ... and fix the Previous/Next buttons:
	if (n == 0) {
		document.getElementById("prevBtn").style.display = "none";
	} else {
		document.getElementById("prevBtn").style.display = "inline";
	}
	if (n == (x.length - 1)) {
		document.getElementById("nextBtn").innerHTML = "Submit";
	} else {
		document.getElementById("nextBtn").innerHTML = "Next";
	}
	// ... and run a function that displays the correct step indicator:
	fixStepIndicator(n)
}

function nextPrev(n) {
	// This function will figure out which tab to display
	var x = document.getElementsByClassName("tab");
	// Exit the function if any field in the current tab is invalid:
	//if (n == 1 && !validateForm() ) return false;
	// Hide the current tab:
	x[currentTab].style.display = "none";
	// Increase or decrease the current tab by 1:
	currentTab = currentTab + n;
	// if you have reached the end of the form... :
	// if (currentTab >= x.length) {
	//   //...the form gets submitted:
	//   document.getElementById("regForm").submit();
	//   return false;
	// }
	// Otherwise, display the correct tab:
	showTab(currentTab);
}

// function validateForm() {
//   // This function deals with validation of the form fields
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   // A loop that checks every input field in the current tab:
//   for (i = 0; i < y.length; i++) {
//     // If a field is empty...
//     if (y[i].value == "") {
//       // add an "invalid" class to the field:
//       y[i].className += " invalid";
//       // and set the current valid status to false:
//       valid = false;
//     }
//   }
//   // If the valid status is true, mark the step as finished and valid:
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid; // return the valid status
// }




function fixStepIndicator(n) {
	// This function removes the "active" class of all steps...
	var i, x = document.getElementsByClassName("step");
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" active", "");
	}
	//... and adds the "active" class to the current step:
	x[n].className += " active";
	// document.getElementsByClassName("step")[currentTab].className += " finish";
}


// Get the modal
var modal1 = document.getElementById("addMemberModal");

// Get the button that opens the modal
var btn = document.getElementById("addMemberBtn");

// Get the <span> element that closes the modal
var span1 = document.getElementById("modal1Close");
var span2 = document.getElementById("modal2Close")
var modal2 = document.getElementById("addCropQuantity")
var span3 = document.getElementById("modal3Close")
var modal3 = document.getElementById("addProductQuantity")

var hideBody = document.getElementsByTagName('body')[0];
// When the user clicks the button, open the modal 
btn.onclick = function () {
	modal1.style.display = "block";
	hideBody.classList.add('in');
	document.getElementById("addMemberForm").reset();
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
	modal1.style.display = "none";
	hideBody.classList.remove('in');
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal1) {
		modal1.style.display = "none";
		hideBody.classList.remove('in');
	}
}


function addGoodsTable() {
	var sel = document.getElementById('goods');
	x = sel.selectedIndex
	y = sel[x].text
	sel.remove(x)
	rowAdd()
}

function rowAdd() {
	var table = document.getElementById("goodsTable");

	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(1);

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);


	// Add some text to the new cells:
	cell1.innerHTML = y;
	var x = document.createElement("INPUT");
	x.setAttribute("type", "number");
	document.getElementById("goodsTable").rows[1].cells[1].appendChild(x)
}
// for modal 2
function addCrops(listNo){
	var selectList = document.getElementById("crops"+listNo);
	listIndex = selectList.selectedIndex
	cropName = selectList[listIndex].value
	selectList.remove(listIndex);
	modal2.style.display = "block";
	hideBody.classList.add('in');
	document.getElementById("cropModalBtn").setAttribute("onclick", "addCropCard("+listNo+")");
	document.getElementById("addCropForm").reset();
	span2.onclick = function () {
		modal2.style.display = "none";
		hideBody.classList.remove('in');
	}
	window.onclick = function (event) {
		if (event.target == modal2) {
			modal2.style.display = "none";
			hideBody.classList.remove('in');
		}
	}
}

// modal 3
function addProducts(listNo) {
	var selectList = document.getElementById("products"+listNo);
	listIndex = selectList.selectedIndex
	productName = selectList[listIndex].value
	selectList.remove(listIndex);
	modal3.style.display = "block";
	hideBody.classList.add('in');
	document.getElementById("productModalBtn").setAttribute("onclick", "addProductCard("+listNo+")");
	document.getElementById("addProductForm").reset();
	span3.onclick = function () {
		modal3.style.display = "none";
		hideBody.classList.remove('in');
	}
	window.onclick = function (event) {
		if (event.target == modal3) {
			modal3.style.display = "none";
			hideBody.classList.remove('in');
		}
	}
}
var c = 0;
var gender = document.getElementsByName("gender");
function addMemberCard() {
	modal1.style.display = "none";
	hideBody.classList.remove('in');
	var name = document.getElementById("nameInput").value;
	var dob = document.getElementById("dobInput").value;
	var occupation = document.getElementById("occupationInput").value;
	var income = document.getElementById("incomeInput").value;
	var qualification = document.getElementById("qualificationInput").value;
	var techSkills = document.getElementById("techSkillsInput").value;
	var otherSkills = document.getElementById("otherSkillsInput").value;
	var frame = document.getElementsByTagName("IFRAME")[0];
	var card = frame.contentWindow.document.getElementById("memberCard");
	var member = document.importNode(card, true);
	document.getElementById("memberCardContainer").appendChild(member);
	insData("name", name);
	insData("dob", dob);
	insData("gender", gender);
	insData("occupation", occupation);
	insData("qualification", qualification);
	insData("income", income)
	insData("techSkills", techSkills)
	insData("otherSkills", otherSkills)
	c++;
}

function addCropCard(num) {
	modal2.style.display = "none";
	hideBody.classList.remove('in');
	var countCrop = document.getElementById("countCropInput").value;
	var dayProduction = document.getElementById("dayProductionInput").value;
	var weekProduction = document.getElementById("weekProductionInput").value;
	var monthProduction = document.getElementById("monthProductionInput").value;
	var yearProduction = document.getElementById("yearProductionInput").value;
	var frame = document.getElementsByTagName("IFRAME")[0];
	var card = frame.contentWindow.document.getElementById("cropCard");
	var crop = document.importNode(card, true);
	document.getElementById("cropCardContainer"+num).appendChild(crop);
	insData("cropName", cropName);
	insData("countCrop", countCrop);
	insData("dayProduction", dayProduction);
	insData("weekProduction", weekProduction);
	insData("monthProduction", monthProduction);
	insData("yearProduction", yearProduction);
	c++;
}

function addProductCard(num) {
	modal3.style.display = "none";
	hideBody.classList.remove('in');
	var countProduct = document.getElementById("countProductInput").value;
	var dayUse = document.getElementById("dayUseInput").value;
	var weekUse = document.getElementById("weekUseInput").value;
	var monthUse = document.getElementById("monthUseInput").value;
	var yearUse = document.getElementById("yearUseInput").value;
	var frame = document.getElementsByTagName("IFRAME")[0];
	var card = frame.contentWindow.document.getElementById("productCard");
	var product = document.importNode(card, true);
	document.getElementById("productCardContainer"+num).appendChild(product);
	insData("productName", productName);
	insData("countProduct", countProduct);
	insData("dayUse", dayUse);
	insData("weekUse", weekUse);
	insData("monthUse", monthUse);
	insData("yearUse", yearUse);
	c++;
}

function insData(oldId, val) {
	var newId = document.getElementById(oldId).id = oldId + c;
	var newElement = document.getElementById(newId);
	if (val == gender) {
		for (i = 0; i < val.length; i++) {
			if (val[i].checked) {
				newElement.innerHTML = val[i].value;
			}
		}
	} else {
		newElement.innerHTML = val
	}
	return newElement
}


// Page Loading
window.onload = function () {
	var elements = document.getElementsByTagName('*'),
		i;
	for (i in elements) {
		if (elements[i].hasAttribute && elements[i].hasAttribute('data-include')) {
			fragment(elements[i], elements[i].getAttribute('data-include'));
		}
	}

	function fragment(el, url) {
		var localTest = /^(?:file):/,
			xmlhttp = new XMLHttpRequest(),
			status = 0;

		xmlhttp.onreadystatechange = function () {
			/* if we are on a local protocol, and we have response text, we'll assume
			 *  				things were sucessful */
			if (xmlhttp.readyState == 4) {
				status = xmlhttp.status;
			}
			if (localTest.test(location.href) && xmlhttp.responseText) {
				status = 200;
			}
			if (xmlhttp.readyState == 4 && status == 200) {
				el.outerHTML = xmlhttp.responseText;
			}
		}

		try {
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		} catch (err) {
			/* todo catch error */
		}
	}
}