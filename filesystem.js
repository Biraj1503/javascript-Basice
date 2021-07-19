const fs = require('fs')
const http = require('http')
/*const obj={
	id:1,
	name:'Biraj Kumar Biswas',
	email:'toshebamail@gmail.com',
	phone:'01706151414',
	address:'Barishal',
	friendlist:['Shohel','Balla', 'Neyamul', 'Apu'],
	education:[
	{
		school:'Patherhat Jubli Institution',
		collage:'Infra Polytechine Institution,Barisal',
		university:'World University of Bangladesh,Dhaka'
	},
	{ima:'java.png'}
	]
}
const value = JSON.stringify(obj)
console.log(value)
fs.writeFile('data.js', value,()=>console.log('File Write Successfule'))
fs.readFile('data.js',(err,data)=>{
	if(err){
		return console.log('This is Error')
	}
	const readData= JSON.parse(data)
	console.log(readData.education)
})*/
fs.unlink('/java',()=>console.log('Delete Successfule'))
fs.rename('./data.js','./file.js',()=>console.log('Rename Successfule')
/*const server = http.createServer((req,res)=>{
	console.log(req.url)
	fs.readFile('scroll.html',(err,data)=>{
		res.write(data)
		res.end()
	})
})
server.listen(3000,()=>console.log('Server Is Running'))*/