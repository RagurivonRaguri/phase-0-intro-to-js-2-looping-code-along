const cards = ['Guadalupe','Ollie','Aki'];
function writeCards(cards, event='surprise') {
    const messages = []
    for (let i = 0; i < cards.length; i++) {
    const message = `Thank you, ${cards[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
    }
    console.log(messages)
    return messages;
}

function countDown(count) {
    let message1 = []
    while (count >= 0) {
        message1.push(count);
        console.log(count)
        count = count-1;
    }
    return message1
    
}
console.log(countDown(4))