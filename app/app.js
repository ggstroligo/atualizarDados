const url_da_api = "http://localhost/atualizarDados/app/";
$(document).ready( () => {
	$("#app").load('./components/login-form.html', () => {
		document.getElementById("login").onclick = () => checkLogin()
	})
})

const checkLogin = () => {
	event.preventDefault();
	let user = document.getElementsByTagName('input')['user'].value
	let pass = document.getElementsByTagName('input')['pass'].value
	$.ajax({
		url: `${url_da_api}Login.php`,
		method: "post",
		data: {user: user, pass: pass }
	}).done( (res, result) => {
		document.getElementById('sign-in').remove()
		$("#app").load('./components/main.html')
	}).fail( (err, x, res) => {
		alert(`Erro no servidor`);
		console.log(res)

	});;
}

