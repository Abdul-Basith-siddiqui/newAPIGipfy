// grab the input value

document.querySelector(".js-go").addEventListener("click",()=>{
let input= document.querySelector(".js-userinput").value;
generateApi(input);

//pushToDom(input);
});


document.querySelector(".container-textinput").addEventListener("keyup",(e)=>{
let input= document.querySelector(".js-userinput").value;
// e is an object passed in function 
//which-is keycode everyKey has an unique number (enter key has =13)
if(e.which===13)
generateApi(input);
//pushToDom(input);
//console.log(e);
});

//do stuff with data AJAX
const generateApi =(input)=>{
	let q=input;
let api_key=`https://api.giphy.com/v1/gifs/search?api_key=79pRESKPi1yzMpTGLyEmntBU0z9uA0AV&q=${q}`;

let gipfyAJAX = new XMLHttpRequest();
gipfyAJAX.open( 'GET', api_key);
gipfyAJAX.send();

gipfyAJAX.addEventListener("load",(e)=>{
let data=e.target.response;
console.log(e);
pushToDom(data);
});
}



//show me the gifs
const pushToDom =(portal)=>{

	let response=JSON.parse(portal); //array of objects
	imageUrl=response.data;
	let result= document.querySelector(".js-container");// to hold all gifs container
	result.innerHTML="";
	imageUrl.map((e)=>{                       //first obj ku autha ta 0 then 1 , 2 , 3 ...
		let src=e.images.fixed_height.url;
		//console.log(src);
		
  		result.innerHTML+="<img src=\""+src+"\" class=\"container-image\">";
  		//result.innerHTML+="<img src="+src+" class=\"container-image\">";
	});


// second api ka hai ye
   let result1= document.querySelector(".js-container");
   	result.innerHTML="";
		//SECOND API GRAB
	 imageUrl.map((e)=>{
		let sr=e.images.fixed_height_downsampled.url;
		//console.log(imageUrl);
		
  		result1.innerHTML+="<img src=\""+sr+"\" class=\"container-image\">";
  		//result.innerHTML+="<img src="+src+" class=\"container-image\">";
  		
	});

	///"<img src=\"https://media3.giphy.com/media/Z1kpfgtHmpWHS/200.gif\">";
	
	// var textnode = document.createTextNode(portal);
 //    result.appendChild(textnode);

}
