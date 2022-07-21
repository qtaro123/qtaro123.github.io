function janken(myHand) {

    let handArray = ['①', '②', '③'];

 
    console.log('プレイヤーの手は' + handArray[myHand]);


    let rand = Math.random() * 100;
    console.log(rand)

    let randInt = Math.floor(rand);
    console.log(randInt);


    let computerHand = randInt % 3;
    console.log('コンピュータの手は' + handArray[computerHand]);


    let result = 0;

    let resultText = ['大吉', '中吉', '小吉',]

    if (myHand === 2) {
        if (computerHand === 0) {
            result = 0;
        } else if (computerHand === 1) {
            result = 2;

        } else if (computerHand === 2) {
            result = 1;
        }
    } if (myHand === 1) {
        if (computerHand === 0) {
            result = 1;
        } else if (computerHand === 1) {
            result = 0;
        }
        else if (computerHand === 2) {
            result = 2;
        }

    } else if (myHand === 2) {
        if (computerHand === 0) {
            result = 2;
        } else if (computerHand === 1) {
            result = 1;

        } else if (computerHand === 2) {
            result = 0;
        }
    }

    const result_p = document.querySelector('#janken-result');
    result_p.textContent = resultText[result];
}