import React from "react";
import ReactDOM from "react-dom";

import { StormLibraryConfig } from "@stormstreaming/stormlibrary";
import { StormPlayerConfig } from "@stormstreaming/stormplayer";

import StormPlayer from "./components/stormPlayer/StormPlayer";
import {StormStreamConfig} from "@stormstreaming/stormplayer";

<<<<<<< HEAD
const libraryConfig:StormStreamConfig = {
=======
const playerConfig: StormPlayerConfig = {
  containerID: "player1",
  width: 1280,
  height: 720,
  title: "Your streaming video title",
  subtitle: "Subtitle for your video",
};

const libraryConfig: StormLibraryConfig = {
>>>>>>> c1839057d8515836d7c9ea90b8441db866a441c5
  configurationType: "embedded", // "embedded" or "gateway", please check doc for more info
  stream: {
    serverList: [
      // list of streaming server, 2nd, 3rd etc. will be used as backup
      {
        host: "localhost", // host or ip to the streaming server
        application: "live", // application name (can be configured in storm server settings)
        port: 8080, // server port
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
    debug: {
      console: {
        // console output
        enabled: false, // if console output is activated
      },
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <StormPlayer
      playerConfig={{
        containerID: "player1",
        aspectRatio:"16:9",
        width: "100%",
        height: "100%",
        title: "Your streaming video title",
        subtitle: "Subtitle for your video",
      }}
      libraryConfig={libraryConfig}
    />
=======
    <StormPlayer playerConfig={playerConfig} libraryConfig={libraryConfig} />
>>>>>>> c1839057d8515836d7c9ea90b8441db866a441c5
  </React.StrictMode>,
  document.getElementById("root")
);
