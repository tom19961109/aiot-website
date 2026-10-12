---
title: Vue 3 + Vite + JavaScriptでPlotly.jsを利用した統計グラフの実装
 ～ P管理図（不良率管理図）を例として ～

description: まず、Vite を使用して Vue 3 の新規プロジェクトを素早く作成します。プログラミング言語はデフォルトの JavaScript を使用し、その後、Plotly.js を順を追ってインストールして導入します。今回は P管理図（不良率管理図） を例に、統計的工程管理（SPC）で使用される管理図の実装方法を説明します。

image:
  src: images/blogs/plotlyJs/pChartAdvantage.png

authors:
  - name: Neil Tsai
    avatar:
      src: https://avatars.githubusercontent.com/u/12755093?v=4&size=64

date: 2026-10-05
---

製品やプロジェクトの開発において、Plotly.js を利用して統計管理図を実装する必要がある場合があります。本記事では、シンプルな統計管理図である P管理図（不良率管理図） を例に、その実装方法を紹介します。
 
まず、コマンドプロンプトを起動し、Vue 3 の新規プロジェクトを作成します。プログラミング言語には JavaScript を選択します。

```
npm create vite@latest
```

Visual Studio Code のターミナルを開き、以下のコマンドを入力して Plotly.js をインストールします。
```
npm i plotly.js
```
SPC（統計的工程管理）における P-chart（不良率管理図） （以下、「P管理図」）には、以下の4本の線が必要です：

中心線 CL(Center Line)

管制上限 UCL（Upper Control Limit

管制下限 LCL （Lower Control Limit）

不良率

数式の参考 https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc332.htm?utm_source=chatgpt.com 
 
グラフ作成の参考コード例：

```html
<template>
  <div ref="chart"></div>
</template>
```

```js
<script setup>
import Plotly from 'plotly.js/dist/plotly.js';
import { onMounted, ref } from 'vue';

const chart = ref(null);

var ucl = {
  x: [1, 2, 3, 4, 5],
  y: [9.88, 9.88, 9.88, 9.88, 9.88],
  mode: 'lines',
  name: 'UCL管制上限',
};

var cl = {
  x: [1, 2, 3, 4, 5],
  y: [3, 3, 3, 3, 3],
  mode: 'lines',
  name: 'CL中心線',
};

var lcl = {
  x: [1, 2, 3, 4, 5],
  y: [0, 0, 0, 0, 0],
  mode: 'lines',
  name: 'LCL管制下限',
};

var values = {
  x: [1, 2, 3, 4, 5],
  y: [3, 2, 4, 2, 3],
  mode: 'lines+markers',
  name: '不良率(%)',
};

var data = [ucl, cl, lcl, values];

var layout = {
  title: { text: 'P-Chart' },
};

onMounted(() => {
  Plotly.newPlot(chart.value, data, layout);
});
</script>
```

結果は以下の図のとおりです：
![Plotly.js畫出的基本P-Chart](/images/blogs/plotlyJs/basicPChart.png){.rounded-lg height="800" width="800"}

さらに高度な実装例として、不良率が管理上限（UCL）を超えた場合に、赤いポイントと赤いラインで警告を表示することができます。表示例は以下の図のとおりです：
![Plotly.js畫出的進階P-Chart](/images/blogs/plotlyJs/pChartAdvantage.png){.rounded-lg height="800" width="800"}


上記のグラフは、他の統計管理図にも応用することができます。例えば、：

C-Chart,
NP-Chart,
U-Chart
XBar-R-Chart
XBar-S-Chart
XMed-R-Chart
X-MR-Chart,
MA-Chart
I-MR-Chart

ご興味をお持ちいただけましたら、ぜひ下記の連絡先までお気軽にお問い合わせください。お客様の課題やご要望に合わせて、ソリューションのデモンストレーションおよび詳細なご説明をさせていただきます[SPC](/solutions/spc) 。

[お問い合わせ](/contactUs)