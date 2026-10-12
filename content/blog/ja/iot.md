---
title: Vue 3 と Vite を活用した MQTT による IoT デバイス接続監視システムの実装

description: まず、MQTTブローカーとして Mosquitto をインストールします。次に、MQTTX を使用して MQTT の動作をシミュレートします。その後、Vite を利用して Vue 3 の新規プロジェクトを迅速に作成し、mqtt.js を導入して MQTT ブローカーとの接続を確立します。最後に、設備・機器から送信されたデータを受信し、画面上にリアルタイムで表示します。

image:
  src: images/blogs/iot/iotDashboard.png

authors:
  - name: Neil Tsai
    avatar:
      src: https://avatars.githubusercontent.com/u/12755093?v=4&size=64

date: 2026-10-08
---

## mosquitto

まず、 [mosquitto](https://mosquitto.org/download/) をダウンロードしてインストールします。

インストール完了後、PowerShell またはコマンドプロンプト（CMD）で正常にインストールされていることを確認します：

```
cd "C:\Program Files\mosquitto"

.\mosquitto.exe -h
```

バージョン情報およびコマンドラインオプションの説明が表示されれば、インストールは正常に完了しています。

## MQTTX

次に、 [MQTTX](https://mqttx.app/) をダウンロードしてインストールします。

インストール完了後、MQTTX を起動し、Connections の「＋」をクリックして New Connection を選択し、新しい接続を作成します。
![MQTTX建立新連線](/images/blogs/iot/mqttx.png){.rounded-lg height="350" width="350"}

以下の内容を入力し、Client ID は指定せず、そのまま Connect をクリックします：
![MQTTX 輸入內容](/images/blogs/iot/mqttxInput.png){.rounded-lg height="800" width="800"}

## Vue3 Vite

ブラウザでは WebSocket 接続が必要なため、例えば以下のように設定します：

```
ws://localhost:9001
```

そのため、Mosquitto のインストールディレクトリに戻り、mosquitto.conf ファイルを探します。

WebSocket リスナーを追加するため、以下の設定を追記します：

```
listener 1883
protocol mqtt

listener 9001
protocol websockets

allow_anonymous true
```

次に、タスクマネージャーを開き、Mosquitto サービスを再起動します。
![mosquitto服務](/images/blogs/iot/mosquittoService.png){.rounded-lg height="800" width="800"}

Vue 3 + TypeScript のコードを以下のように作成します:

```html
<template>
  <h3>接收到的訊息：{{ receiveMessage }}</h3>
</template>
```

```typescript
<script setup lang="ts">
import { ref } from 'vue';
import mqtt, { type MqttClient } from 'mqtt';

const receiveMessage = ref();

const client: MqttClient = mqtt.connect('ws://localhost:9001');

client.on('connect', () => {
  console.log('MQTT connected');

  client.subscribe('factory/machine01/data');
});

client.on('message', (topic, message) => {
  receiveMessage.value = message.toString();
  console.log(topic, message.toString());
});
</script>
```

MQTTX の Published を選択し、以下の図のように入力します：
![在MQTTX選Published並輸入](/images/blogs/iot/published.png){.rounded-lg height="800" width="800"}

Web ページでは、下図のようにメッセージを受信できます：
![web收到訊息](/images/blogs/iot/receiveMessage.png){.rounded-lg height="800" width="800"}

このようにして、IoT デバイスのネットワーク接続監視をシミュレートすることができます。さらに、高度な IoT 設備向けダッシュボードのイメージは以下のとおりです：
![iot 機台儀表板](/images/blogs/iot/iotMachineDashboard.gif){.rounded-lg height="800" width="800"}

ご興味をお持ちいただけましたら、ぜひ下記の連絡先までお気軽にお問い合わせください。お客様の課題やご要望に合わせて、ソリューションのデモンストレーションおよび詳細なご説明をさせていただきます[AIoT スマートコネクテッドネットワーク](/solutions/aiot)  。

[お問い合わせ](/contactUs)
