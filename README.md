# Video Chat

A simple video chat between two people as an example of how to connect two browsers via WebRTC using Twilio STUN/TURN infrastracture.

This is an updated version of [this repo](https://github.com/philnash/video-chat). The update includes: 
* Replace Hapi with Express
* Remove Google’s adapter.js library in favour of standard supported features
* Add logging

The reference blog post is [here](https://www.twilio.com/blog/2014/12/set-phasers-to-stunturn-getting-started-with-webrtc-using-node-js-socket-io-and-twilios-nat-traversal-service.html)

# Quick start
* Clone this repo
```
https://github.com/vernig/video-chat.git
```
* Install dependencies
```
npm install
```
* Start the server
```
npm start
```
* Open two browsers on your laptop and point them `localhost:3000`. If you want to use a client on another machine, make sure to publish your server on an HTTPS connection (otherwise the camera may not work depoending on your browser). You can use a service like [ngrok](https://ngrok.com/) for that. 
* Click on the "Get Video" button on both browsers
* Click on button "Call" on one of the browser, to establish the video call 


# References
* https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
* https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL#Using_object_URLs_for_media_streams
* https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling
