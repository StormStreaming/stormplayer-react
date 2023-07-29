import React from "react";
import ReactDOM from "react-dom";

import StormPlayer from "./components/stormPlayer/StormPlayer";
import {StormPlayerConfig, StormStreamConfig} from "@stormstreaming/stormplayer";

const streamConfig:StormStreamConfig = {
  configurationType: "embedded", // "embedded" or "gateway", please check doc for more info
  stream: {
    serverList: [
      // list of streaming server, 2nd, 3rd etc. will be used as backup
      {
        host: "localhost", // host or ip to the streaming server
        application: "live", // application name (can be configured in storm server settings)
        port: 8081, // server port
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
    debug: {
      console: {
        // console output
        enabled: true, // if console output is activated
      },
    },
  },
};

const playerConfig:StormPlayerConfig = {
    containerID: "player1",
    aspectRatio:"16:9",
    width: "100%",
    height: "100%",
    title: "Your streaming video title",
    subtitle: "Subtitle for your video",
};

ReactDOM.render(
    <React.StrictMode>
      <StormPlayer
          playerConfig={playerConfig}
          streamConfig={streamConfig}
      />
    </React.StrictMode>,
    document.getElementById("root")
);
