function janken(myHand) {

    let handArray = ['①', '②', '③'];

    // プレイヤーの手は引数のmyHandに入っている
    console.log('プレイヤーの手は' + handArray[myHand]);


    // コンピュータの手をランダムに決める
    // Math.random()は、0以上未満の議事乱数分布から1つの値を返す
    let rand = Math.random() * 100;
    console.log(rand)

    // Math.floor(は、与えられた引数以下の最大の整数を返す)
    let randInt = Math.floor(rand);
    console.log(randInt);

    // 生成したランダムな値を3で割った余りをコンピュータの手とする
    let computerHand = randInt % 3;
    console.log('コンピュータの手は' + handArray[computerHand]);

    // 結果を入れる変数
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
        // HTMLに勝敗を表示する
    const result_p = document.querySelector('#janken-result');
    result_p.textContent = resultText[result];
}