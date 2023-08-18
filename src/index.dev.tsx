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
    },
  });

  const [playerConfig, setPlayerConfig] = useState<StormPlayerConfig>({
    containerID: "player1",
    aspectRatio: "16:9",
    posterURL:"logo.svg",
    demoMode: true,
    width: "100%",
    title: "Your streaming title",
    subtitle: "Subtitle for your video",
    style: {
      backgroundColor:"#777777",
    }
  });
  useEffect(() => {
    setInterval(() => {
      setPlayerConfig((prev) => ({ ...prev, title: "Bardzo dlugi tytul, ktory sie tutaj po prostu nie zmiesci", subtitle: undefined, posterURL:"poster.jpg" }));
    }, 2000);
  }, []);

  return (
    <React.StrictMode>
      <StormPlayer playerConfig={playerConfig} streamConfig={streamConfig} />
    </React.StrictMode>
  );
};

ReactDOM.render(<Asd />, document.getElementById("root"));
