var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function solve(arr, parameter) {
    var finalArr = [];
    for (var i = 0; i < arr.length; i++) {
        var tokens = arr[i];
        var ticket = tokens.split('|');
        var ticketObj = new Ticket(ticket[0], Number(ticket[1]), ticket[2]);
        finalArr.push(ticketObj);
    }
    switch (parameter) {
        case 'destination':
            finalArr = finalArr.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            break;
        case 'price':
            finalArr = finalArr.sort(function (a, b) { return a - b; });
            break;
        case 'status':
            finalArr = finalArr.sort(function (a, b) { return a.status.localeCompare(b.status); });
            break;
    }
    console.log(finalArr);
}
solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price');
