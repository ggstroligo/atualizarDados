// Constantes
const update_file 	= 'Update.php'
const backup_file 	= 'Backup.php'
const public_spreadsheet_url = 'insert key here';

// Handlers //
document.getElementById("restore-backup").onclick = () => restoreBackupData() 
document.getElementById("update-data").onclick = () => updateData()

//Carregamento de dados//
const updateData = () => {
	Tabletop.init({
		key: public_spreadsheet_url,
		callback: loadSpreadsheetData
	});
}

const restoreBackupData = () => {
	$.ajax({
		url: `${url_da_api}${backup_file}`,
		method: "post",
	})
	.done( (res, result) => {
		console.log(`${res}`);
	})
	.fail( (err) => {
		alert('Erro no servidor');
	});;
}

let h = {}

const loadSpreadsheetData = (data) => {
	let dados = {};
	for (let i in data) {
		if (!dados[i]) dados[i] = {};
		dados[i].elements = data[i].elements;
	}
	dados = sortObject(dados);
	
	$.ajax({
		url: `${url_da_api}${update_file}`,
		method: "post",
		data: {
			dados: JSON.stringify(dados)
		}
	}).done( (res, result) => {
		alert(`${result}: operação finalizada`);
	}).fail( (err) => {
		alert('Erro no servidor');
	});;
}

const sortObject = (o) => {
	   let a = [], i;
	   for(i in o){ 
	     if(o.hasOwnProperty(i)){
	         a.push([i,o[i]]);
	     }
	   }
	   a.sort(function(a,b){ return a[0]>b[0]?1:-1; })
	   return a;
}