// code your solution here
function superbowlWin(arrayOfRecords) {

    let myArrayRecords =  arrayOfRecords.find(function (record) {
        if (record.result === "W"){
            return true;
        }else {
            return false;
        }
        
    })
 
    if(myArrayRecords){
        return myArrayRecords.year
    }else{
        return undefined
    }
}

