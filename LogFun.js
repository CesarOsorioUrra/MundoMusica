
function log() 
{
	let user=document.getElementById('username').value
	let pass=document.getElementById('password').value

	if (user=="diego.llorens@virginiogomez.cl" && pass=="12345")
	{
		window.location="Inicio.html";
	}
	else if (user=="cesar.osorio@virginiogomez.cl" && pass=="12345")
	{
		window.location="Inicio.html";
	}
	else if (user=="kaleth.delapena@virginiogomez.cl" && pass=="12345")
	{
		window.location="Inicio.html";
	}
	else
	{
		alert("Datos Incorrectos")
	}


}