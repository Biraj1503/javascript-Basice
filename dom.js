// run this function when the document is loaded
				   /*window.onload = function() {

					 // create a couple of elements in an otherwise empty HTML page
					 const heading = document.createElement("h1");
					 const heading_text = document.createTextNode("Big Head!");
					 heading.appendChild(heading_text);
					 document.body.appendChild(heading);
					 
					const para 	= document.createElement('p')
					const para_Text = document.createTextNode("This Is Your Name:")
					para.appendChild(para_Text)
					document.body.appendChild(para)
					
					const h1 = document.createElement('h1')
					const h1_Text=document.createTextNode('Name Is Replace')
					h1.appendChild(h1_Text)	
					const input = document.createElement('input')
						input.type='text'
						input.name='name'
						input.placeholder='Nice'
						document.body.appendChild(input)
						document.body.replaceChild(h1,para)
						console.log(input)	
				  }
				 
		function validatPositione(){
		  var x = document.getElementById('email').value; 
		  var atPosition = x.indexOf("@"); 
		  var dotPosition = x.lastIndexOf(".");
		  if (atPosition <1){
			alert("This is not a valid e-mail address");
			return false;
		  }
		alert('ok')
		}*/
		
const students = [
{
	id:1,
	name:'MD Amzad Hossain',
	address:'Chanpur',
	room:'10',
	subject:'Accounting',
	img:'java.png'
},
{
	id:29,
	name:'Biraj Kumar Biswas',
	address:'Rukundi',
	room:'10',
	subject:'Humanaties',
	img:'java.png'
},
{
	id:2,
	name:'Biti Rani',
	address:'Chorhogla',
	room:'10',
	subject:'Secince',
	img:'java.png'
},
{
	id:3,
	name:'Lokhhi Rani',
	address:'KolosKathi',
	room:'10',
	subject:'Secince',
	img:'java.png'
},
{	
	id:4,
	name:'Dolla Kormokar',
	address:'Sonamokhi',
	room:'10',
	subject:'Secince',
	img:'java.png'
},
{	
	id:5,
	name:'Aunto Sikder',
	address:'Chohogla',
	room:'10',
	subject:'Accounting',
	img:'java.png'
},
{	
	id:6,
	name:'pritom Biswas',
	address:'Sadekpur',
	room:'10',
	subject:'Secince',
	img:'java.png'
},
{
	id:7,
	name:'Lopa Das',
	address:'Sonamokhi',
	room:'10',
	subject:'Humanaties',
	img:'java.png'
},
{
	id:8,
	name:'Lopa Das',
	address:'Hijla',
	room:'10',
	subject:'Humanaties',
	img:'java.png'
}
]
function myFunction(){
	let rollNumber = document.getElementById('roll').value
	//let names = document.getElementById('ok').value
	let chk = document.getElementById('rd')
	students.map(val=>{
		const {id,name,room} = val
		if(rollNumber==id){
		//&& names==name
			const fr = document.forms[0]
			for(i=0;i<fr.length;i++){
				if(fr[i].checked && fr[i].value==room){
					val.img ? document.getElementById('img').src=val.img :''
					val.img ? document.getElementById('img').style='width:200px;height:200px' : ''
					document.getElementById('name').innerHTML='Name:'+' '+name
					document.getElementById('address').innerHTML='Address:'+' '+val.address
					document.getElementById('room').innerHTML='Class:'+' '+val.room
					document.getElementById('subject').innerHTML='Subject:'+' '+val.subject
					/*const div = document.getElementById('img')
					const ele =document.createElement('img')
					ele.src=val.img
					ele.alt='Do Not Found'
					ele.style='width:200px;height:200px'
					div.appendChild(ele)*/
				}
			}
		}
		//return console.log('Not Found')
	})
}

function studentsDAta(){
let include={}
	let id = document.getElementById('rollnumber').value
	let name = document.getElementById('names').value
	let address = document.getElementById('addresss').value
	let subject = document.getElementById('subjects').value
	let room = document.getElementById('classs').value
	//let img = document.getElementById('imgs')
	let arr = [id,name,address,subject,room]
	for(i=0;i<arr.length;i++){
		if(arr[i]==''){
			return alert('এটা করবেন না, দয়া করে ইনপুট ফিল্ড গুলো আগে পূরন করুন, তারপর সাবমিট করুন। ধন্যবাদ')
		}
	}
			include.id =id
			include.name =name
			include.address=address
			include.subject=subject
			include.room=room
			//include.img =this.files && this.files[0]
			console.log(include)
			students.push(include)
			//localStorage.setItem('student', JSON.stringify(students))
			document.getElementById('rollnumber').value=''
			document.getElementById('names').value=''
			document.getElementById('addresss').value=''
			document.getElementById('subjects').value=''
			document.getElementById('classs').value=''
			document.getElementById('imgs').value=''
			console.log(students)
			
		return include	
}
 
//console.log(localStorage.getItem('user'))