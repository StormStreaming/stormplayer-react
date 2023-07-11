import React from "react";
import ReactDOM from "react-dom";

import StormPlayer from "./components/stormPlayer/StormPlayer";

const libraryConfig = {
  configurationType: "embedded", // "embedded" or "gateway", please check doc for more info
  stream: {
    serverList: [
      // list of streaming server, 2nd, 3rd etc. will be used as backup
      {
        host: "localhost", // host or ip to the streaming server
        application: "live", // application name (can be configured in storm server settings)
        port: 80, // server port
        ssl: false, // whenever SSL connection should be used or not
      },
    ],
    sourceList: [
      {
        protocol: "storm", // either "storm" (stream was published to the server), or "rtmp". RTMP (external source)
        streamKey: "test", // name of the stream
      },
    ],
  },
  settings: {
  autoStart: true, // if true, video will start playing automatically, but will be muted too
  restartOnError: true, // if something bad happens, player will try to restart
  reconnectTime: 1.0, // if a connection with a server fails, player will restart in given time
  enabledProtocols: ["MSE", "HLS"], // "MSE" for desktop, android browsers and iPad OS, "HLS" for iPhone iOS
  video: {
    scalingMode: "letterbox", // possible values "fill", "letterbox", "crop" and "letterbox"
  },
  debug: {
    console: {
      // console output
      enabled: true, // if console output is activated
    },
  },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <StormPlayer
      playerConfig={{
        containerID: "player1",
        width: 1280,
        height: 720,
        title: "Your streaming video title",
        subtitle: "Subtitle for your video",
      }}
      libraryConfig={libraryConfig}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
