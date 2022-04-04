function change(){
	document.getElementById('one').src = 'https://www.yikaojixun.com/uploads/7c9643b7e8dd3af768b5177e97790448.jpg'
}

 
function change2(){
	document.getElementById('two').innerHTML='Nohara Shinnosuke';
}

function change3(){
	var select = document.getElementById('three');
	select.style.backgroundColor = 'lightyellow';
	select.style.fontFamily = 'Arial';
	select.style.textAlign = 'center'
}



function change4(){
	var select = document.getElementById('five');
	var ftoc =-12*5/9
	document.getElementById('five').innerHTML = ftoc
}


function change5(){
	var firstName = prompt('what is your first name?');
	var lastName =prompt('what is your last name?')
    alert('Nice to meet you,'+ firstName +lastName)
}

function sum(){
	var n1 = parseFloat(prompt('enter numbber 1;'));
	var n2 = parseFloat(prompt('enter numbber 2;'));
	alert(n1 + n2);
   
}


