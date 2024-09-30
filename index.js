// code your solution here
function superbowlWin(record){
    const records = record.find(record => record.result === "W")
    return records ? records.year : undefined
}






