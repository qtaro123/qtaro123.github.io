console.log('chart.jsを読み込みました');

// chart.jsの本家のサイトからコピーしてきたサンプルコード
// 折れ線グラフ

// ラベル
const labels = [
    '5/29',
    '5/30',
    '6/1',
    '6/2',
    '6/3',
    '6/4',
];

// グラフデータ
const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [7248, 7453, 4695, 4173, 4476, 2982, 8301],
    }]

};

// コンフィグ
const config = {
    type: 'line',
    data: data,
    options: {}
};

// グラフをcanvasタグに描画する（ID名で場所確定）
const myChart = new Chart(
    // document.getElementById('myChart'),
    // 上の処理をjQueryを使って書くと…
    $('#myChart'),
    config
  );


