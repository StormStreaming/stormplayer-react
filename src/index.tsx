import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import {
  StormPlayerConfig,
  StormStreamConfig,
} from "@stormstreaming/stormplayer";

import StormPlayer from "./components/stormPlayer/StormPlayer";

const Asd = () => {
  const [streamConfig, _setStreamConfig] = useState<StormStreamConfig>({
    configurationType: "embedded", // "embedded" or "gateway", please check doc for more info
    stream: {
      serverList: [
        // list of streaming server, 2nd, 3rd etc. will be used as backup
        {
          host: "cdn-eu01.stormstreaming.com",
          application: "live",
          port: 443,
          ssl: true,
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
  });

  const [playerConfig, setPlayerConfig] = useState<StormPlayerConfig>({
    containerID: "player1",
    aspectRatio: "16:9",
    width: "100%",
    height: "100%",
    title: "Your streaming video title",
    subtitle: "Subtitle for your vssideo",
  });
  useEffect(() => {
    setTimeout(() => {
      console.log("Zmieniam `playerConfig` w komponencie konsumującym playera");
      setPlayerConfig((prev) => ({ ...prev, title: "asde", subtitle: "asd" }));
    }, 3000);
  }, []);

  return (
    <React.StrictMode>
      <StormPlayer playerConfig={playerConfig} streamConfig={streamConfig} />
    </React.StrictMode>
  );
};

ReactDOM.render(<Asd />, document.getElementById("root"));
