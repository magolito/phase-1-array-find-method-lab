// code your solution here
function superbowlWin(record) {
    const winRecord = record.find(year => year.result === "W")
    return winRecord ? winRecord.year : undefined 
}



