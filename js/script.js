	let word=document.getElementById("word");
	let inr=0;


	function result(){
	inr++;
	let para=document.createElement("p");
	word.appendChild(para);
	para.innerHTML="I am a Hacker";
	}


let interId=setInterval(()=>{
			if(inr===5){
				clearInterval(interId)
			} 
			else{
				result()
			}
		},1000)