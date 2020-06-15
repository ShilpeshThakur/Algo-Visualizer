const parent = document.getElementById("container");
let h4 = document.querySelector('#chooseSpeed h4');

let l1 = document.getElementById("l1");
l1.style.display = "none";

let add_to_arr_div =  document.getElementById("addToArray");
add_to_arr_div.style.display = "none";

let l2 = document.getElementById("l2");

// let l3 = document.getElementById("l3");

// let aprbtn = document.getElementById("aprbtn");
// aprbtn.style.display = "block";

let crbtn = document.getElementById("crbtn");
crbtn.style.display = "block";

let gendescarr = document.getElementById("gendescarr");
gendescarr.style.display = "block";

let colors = ['lightblue','pink','lightgreen'];
let a = createRandArray(parent,25,colors);
let time = 250;
let order = "inc";
let sorty = false;

function generateRandomArray(){
    let val = Number(document.querySelector('#generateArray input').value);
    if(val > 100){
        val = 100;
        document.querySelector('#generateArray input').value = "100"
    }else if(val < 1){
        val = 1;
        document.querySelector('#generateArray input').value = "1"
    }
   a.forEach(el=>el.div.parentNode.removeChild(el.div))
   a = [];
   a = createRandArray(parent,val,colors);
   sorty = false;
   gendescarr.style.display = "block";
   add_to_arr_div.style.display = "none";
   crbtn.style.display = "block";
   // aprbtn.style.display = "block";
}
function addToArray(){
	let val = Number(document.querySelector('#addToArray input').value);
	if(val > 0){
		a.push( createDiv(parent,val,colors) );
		sorty = false;
	}
	else{
		l1.style.display = "block";
	}
}

// function appendToExistingArray(){
	
	// add_to_arr_div.style.display = "block";
	// aprbtn.style.display = "none";
	// crbtn.style.display = "none";
	// l2.style.display = "none";
	// gendescarr.style.display = "none";
// }

function createOwnArray(){
	
	a.forEach(el=>el.div.parentNode.removeChild(el.div))
    a = [];
	add_to_arr_div.style.display = "block";
	crbtn.style.display = "none";
	// aprbtn.style.display = "none";
	l3.style.display = "none";
	gendescarr.style.display = "none";
}


function generateDescArray(){
    let val = Number(document.querySelector('#generateArray input').value);
   a.forEach(el=>el.div.parentNode.removeChild(el.div))
   a = [];
   a = createDecArray(parent,val,colors);
   sorty = false;
}
async function sortArray(){
    
    if(!sorty){
        sorty = true;
    let select = document.querySelector('#chooseSort select')
    let sorting =  select.options[select.selectedIndex].value;
    switch(sorting){
        case "bubble":
            await bubbleSort(a,time,colors)
            break;
		case "inhbubble":
            await inhancedBubbleSort(a,time,colors)
            break;
        case "insertion":
            await insertionSortRec(a,time,colors)
            break;
        case "merge":
            await mergeSort(a,time,colors);
            break;
        case "quick":
            await quickSort(a,time,colors)
            break;
        case "select":
            await selectionSort(a,"inc",time,colors)
            break;
    }
   
}
}
h4.innerHTML = "your sorting speed is " + 250 ; 
function setSpeed(){
    let val = Number(document.querySelector('#chooseSpeed input').value);
    if( val > 500 ){
        document.querySelector('#chooseSpeed input').value = 
        "100";
        val = 500;
    }
    if(val <= 0) {
        document.querySelector('#chooseSpeed input').value = 
        "1";
        val = 1;
    }
    if(val!=0 && val <= 500){
		time = val; 
   
		h4.innerHTML = "your sorting speed is " + val ; 
    }
}