---
title: Simulating IoT Device Connectivity Monitoring Using Vue 3, Vite, and MQTT

description: First, install Mosquitto as the MQTT broker. Then, use MQTTX to simulate MQTT operations and quickly create a new Vue 3 project with Vite. After that, integrate mqtt.js to establish a connection with the MQTT broker and display the data transmitted from IoT devices in real time.

image:
  src: images/blogs/iot/iotDashboard.png

authors:
  - name: Neil Tsai
    avatar:
      src: https://avatars.githubusercontent.com/u/12755093?v=4&size=64

date: 2026-10-08
---

## mosquitto

First, download and install Mosquitto from the official website: [mosquitto](https://mosquitto.org/download/).

Once the installation is complete, open PowerShell or Command Prompt (CMD) and run the following command to verify that Mosquitto was installed successfully:

```
cd "C:\Program Files\mosquitto"

.\mosquitto.exe -h
```

If the version number and command-line parameters are displayed, it indicates that the installation was successful.

## MQTTX

Next, download and install MQTTX from the official website: [MQTTX](https://mqttx.app/).

Once MQTTX is installed, launch the application. Under the Connections section, click the "+" icon and choose "New Connection" to create a new MQTT connection.
![MQTTX建立新連線](/images/blogs/iot/mqttx.png){.rounded-lg height="350" width="350"}

Enter the following settings. You do not need to specify a Client ID, then click "Connect".：
![MQTTX 輸入內容](/images/blogs/iot/mqttxInput.png){.rounded-lg height="800" width="800"}

## Vue3 Vite

Since browsers require WebSocket support, for example：

```
ws://localhost:9001
```

Therefore, you need to go back to the Mosquitto installation directory and locate the mosquitto.conf file.

Add a WebSocket listener to the configuration as shown below:

```
listener 1883
protocol mqtt

listener 9001
protocol websockets

allow_anonymous true
```

Next, open Task Manager and restart the Mosquitto service.
![mosquitto服務](/images/blogs/iot/mosquittoService.png){.rounded-lg height="800" width="800"}

Create the Vue 3 + TypeScript code as shown below::

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

In MQTTX, switch to the "Publish" tab and enter the settings as shown in the figure below：
![在MQTTX選Published並輸入](/images/blogs/iot/published.png){.rounded-lg height="800" width="800"}

The web page will receive the message as shown in the figure below：
![web收到訊息](/images/blogs/iot/receiveMessage.png){.rounded-lg height="800" width="800"}

This setup can be used to simulate the monitoring of connected IoT devices. An example of a more advanced IoT device dashboard is shown below：
![iot 機台儀表板](/images/blogs/iot/iotMachineDashboard.gif){.rounded-lg height="800" width="800"}

If you would like to learn more about our solutions, please contact us using the information below. Our team will be pleased to provide a live demonstration and discuss how our solutions can meet your needs.[AIoT](/solutions/aiot) 。

[Contact Us](/contactUs)
