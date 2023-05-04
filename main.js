
increaseCounter = () => {
    let count = parseInt(document.getElementById('counter').innerText);
    count += 1;
    document.getElementById('counter').innerText = count;
}

decreaseCounter = () => {
    let count = parseInt(document.getElementById('counter').innerText);
    if (count == 0) {
        return
    }
    count -= 1;
    document.getElementById('counter').innerText = count;
}

document.getElementById('increase').addEventListener('click', increaseCounter, false);
document.getElementById('decrease').addEventListener('click', decreaseCounter, false);

var sNumber = 1;
var tCount = 0;

registerEntries = () => {
    let table = document.getElementById('table').getElementsByTagName('tbody')[0];
    let count = parseInt(document.getElementById('counter').innerText);
    if (count == 0) {
        return
    }

    // Get Current Time
    var currentdate = new Date();
    var datetime =  currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();

    // Insert Table Row
    var newRow = table.insertRow();

    // Insert Cell in the Row
    var newCell = newRow.insertCell();
    var newCell2 = newRow.insertCell();
    var newCell3 = newRow.insertCell();

    // Append Text Node to the Cell
    var newText = document.createTextNode(sNumber);
    var newText2 = document.createTextNode(datetime);
    var newText3 = document.createTextNode(count);
    newCell.appendChild(newText);
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);

    sNumber += 1;
    tCount += count;

    // Update total count & Reset Counter
    document.getElementById('tcount').innerText = tCount;
    document.getElementById('counter').innerText = 0;
}

document.getElementById('save-btn').addEventListener('click', registerEntries, false);