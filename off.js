let result = document.getElementById("inputext");

let solve=(fig)=> {

    result.value+= fig ;
} 


let Answer=()=>{

    try{
        result.value=eval(result.value)

    }

       
    catch(err){

        alert('error')
    }
    


}

function clr(){
    result.value=""
}

function del(){
    result.value=result.value.slice ( 0,-1)
}