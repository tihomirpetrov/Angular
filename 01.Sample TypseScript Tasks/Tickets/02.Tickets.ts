class Ticket {

    destination;
    price;
    status;

    constructor(destination: string, price: number, status: string) {

        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function solve(arr, parameter) {
    let finalArr = [];

    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i];
        let ticket = tokens.split('|');
        let ticketObj = new Ticket(ticket[0], Number(ticket[1]), ticket[2]);
        finalArr.push(ticketObj);
    }


    switch (parameter) {

        case 'destination':
            finalArr = finalArr.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            finalArr = finalArr.sort((a, b) => a - b);
            break;
        case 'status':
            finalArr = finalArr.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    console.log(finalArr);
}


solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination');
