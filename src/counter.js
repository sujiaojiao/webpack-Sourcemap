function counter(){
	var div = document.createElement('div');
	div.setAttribute('id','counter');
	div.innerHTML = 1
// document.body.appendChild(btn);

	div.onclick = function(){
		div.innerHTML = parseInt(div.innerHTML, 10)+1
	}
	document.body.appendChild(div);
}

export default counter;