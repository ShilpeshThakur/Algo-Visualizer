async function bubbleSort(array,time,colors){
    const size = array.length;
    for(let i=0;i<size-1;i++){
        // await Sleep(time);
        for(let j = 0;j<size-i-1;j++){
			
			await colorSelected(array,j,j+1,colors[2]);
			await Sleep(time);
			
            if( array[j].val > array[j+1].val ){
				await colorSelected(array,j,j+1,colors[1]);
			    await Sleep(time);
              
               swap(array,j,j+1);
               await Sleep(time);
               // await colorUnSelected(array,j,j+1,colors[0]);
               //colorSorted(array,i,j,"green")
            }
           
			await colorSelected(array,j,j+1,colors[0]);
        }
    //    await Sleep(time);
       // await colorSorted(array,i,colors[2]);

    }
    for(let i=0;i<size;i++){
        await Sleep(time);
    await colorSorted(array,i,colors[2]);
    }
	console.log(array);
}
//let aa = createRandArray(document.getElementById("container"),100,["red","blue","black"]);


//bubbleSort(aa,5,["red","blue","black"])
