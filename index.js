// code your solution here

// Tests 1-2
function superbowlWin(record) {
    const winningRecord = record.find(pastRecord => pastRecord.result === "W");
    return (typeof winningRecord !== 'undefined') ? winningRecord.year : undefined;
}

