/*let arr = [
	[1,2,3],
	[4,5,6],
	[8,7,9],
	[10,11,12]
]


for(let i = 0; i<arr.length; i++){
	for(let j =0; j<arr[i].length;j++){
		console.log(arr[i][j,0])

	setTimeout(function(){
		console.log(arr[i][j])
	},4000)	
		
	}
}*/

let matixA = [
	[12,22,32],
	[42,52,62],
	[72,82,92]
];	

let matixB = [
	[1,2,3],
	[2,5,6],
	[7,8,9]
];

let matixc = [
	[1,2,3],
	[2,5,6],
	[7,8,9]
];

//matixc.splice(matixc.length,0,[58,68,78])
matixc[matixc.length]=[4580,55,14,4]	
let nice =[matixA,matixB,matixc] 
nice.forEach(mat=>console.log(mat))

const fun = (matixA,matixB,matixc)=>{
	let result=[]
	for(let i= 0; i<matixA.length;i++){
		console.log(matixA[i],matixB[i],matixc[i])
		let row = []
		for(let j=0; j<matixA[i].length;j++){
			row.push(matixA[i][j]+matixB[i][j]+matixc[i][j])	
		}
		result.push(row)
	}
	return result
}

console.log(fun(matixA,matixB,matixc))

let name = [
	{name:"Biaraj",id:2},
	{name:"Rasel",id:3},
	{name:"Rakib",id:4},
	{name:[2],id:3}		
]
console.log(name)
name.map(name=>console.log(name))

let number = [1,2,3,4,5]
let pointtabel=[47,95,99,75,20]
let sum = 0 
/*0+12=12
373+94=467
467+72=539*/

for (let i=0; i<number.length; i++){
	sum +=number[i]
}

console.log(sum)
console.log(sum/number.length)
console.log(sum*number.length)

let largestnumber = pointtabel[0]
let secondlargestnumber = pointtabel[1]
for(let i = 1; i<pointtabel.length;i++){ 
	if(pointtabel[i]>largestnumber){
		largestnumber=pointtabel[i]
	}else if(secondlargestnumber<pointtabel[i]){
		secondlargestnumber=pointtabel[i]
	}
}
console.log(largestnumber)
console.log(secondlargestnumber)
/*index value
	0	47 flase
	1	95 flase
	2	99 true */