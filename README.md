# Video Chat

A simple video chat between two people as an example of how to connect two browsers via WebRTC using Twilio STUN/TURN infrastracture.

The reference blog post is [here](https://www.twilio.com/blog/2014/12/set-phasers-to-stunturn-getting-started-with-webrtc-using-node-js-socket-io-and-twilios-nat-traversal-service.html)

# Quick start
* Clone this repo
```
git clone https://github.com/philnash/video-chat.git
```
* Install dependencies
```
npm install
```
* Create a `.env` file copying `.env.template`. Fill-up `Account SID` and `Auth Token` from your [twilio console](https://www.twilio.com/console)
* Start the server
```
npm start
```
* Open two browsers on your laptop and point them `localhost:3000`. If you want to use a client on another computer/mobile, make sure you publish your server on an HTTPS connection (otherwise the camera may not work). You can use a service like [ngrok](https://ngrok.com/) for that. 
* Click on the "Get Video" button on both browsers
* Click on button "Call" on one of the browser, to establish the video call 
