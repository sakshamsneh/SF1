console.log("content.js running");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message && message.txt == "hello") {
		var tag = document.createElement("p");
		var text = document.createTextNode(message.txt);
		tag.appendChild(text);
		var element = document.getElementsByClassName("appName")[0];
		element.appendChild(tag);
	}

	let table = document.getElementsByClassName("detailList")[0];
	// let mybody = document.getElementsByTagName("body")[0];
	// let tds = mybody.getElementsByTagName("table")[0];
	let mytablebody = table.getElementsByTagName("tbody")[0];
	let row = mytablebody.getElementsByTagName("tr");
	for (let i = 0; i < row.length; i++) {
		let cell = row[i].getElementsByTagName("td")[1];
		console.log(cell);
	}
});

	// for (var i = 0, cell; cell = table.cells[i]; i++) {
	// 	console.log(cell);
	// }
	// let myrow = mytablebody.getElementsByTagName("tr")[1];
	// let mycel = myrow.getElementsByTagName("td")[1];
	// for (td of tds) console.log(td);
	// let paragraphs = document.getElementsByTagName('p');
	// for (elt of paragraphs) {
	// 	elt.style['background-color'] = '#FF00FF';
	// }