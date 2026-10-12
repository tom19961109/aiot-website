---
title: Vue3 Vite+Javascript引用Plotly.js實作統計圖表-以P-chart不良率管制圖為例

description: 先用vite快速建立Vue3新專案，預設程式語言為Javascript，然後一步一步安裝Plotly.js並引用實作統計管制圖表，以P-chart不良率管制圖為例(簡稱：P 管制圖)

image:
  src: images/blogs/plotlyJs/pChartAdvantage.png

authors:
  - name: Neil Tsai
    avatar:
      src: https://avatars.githubusercontent.com/u/12755093?v=4&size=64

date: 2026-10-05
---

由於開發產品或專案上的需要，會需要用到套件Plotly.js，並實作統計管制圖，以下以製作簡單的統計管制圖P-chart為例。
 
首先開啟命令提示字元輸入建立新Vue3專案，程式語言選擇Javascript。

```
npm create vite@latest
```

打開Visaul Studio Code的終端機輸入指令如下安裝plotly.js
```
npm i plotly.js
```
SPC(統計製程管制)的 P-chart(不良率管制圖)， (簡稱：P 管制圖)，必須有4條線如下：

中心線 CL(Center Line)

管制上限 UCL

管制下限 LCL

不良率

公式 參考 https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc332.htm?utm_source=chatgpt.com 
 
繪製圖表之參考程式碼範例：

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

結果如下圖：
![Plotly.js畫出的基本P-Chart](/images/blogs/plotlyJs/basicPChart.png){.rounded-lg height="800" width="800"}

還有更進階的實例，如果遇到不良率超過管制上限時會顯示紅點與紅線警示如下圖：
![Plotly.js畫出的進階P-Chart](/images/blogs/plotlyJs/pChartAdvantage.png){.rounded-lg height="800" width="800"}


以上的圖表可以套用到其它統計管制圖，例如：

C-Chart,
NP-Chart,
U-Chart
XBar-R-Chart
XBar-S-Chart
XMed-R-Chart
X-MR-Chart,
MA-Chart
I-MR-Chart

歡迎與我們聯絡資訊如下，讓我們為您們Demo說明解決方案[SPC統計製程控制系統](/solutions/spc) 。

[聯絡我們](/contactUs)