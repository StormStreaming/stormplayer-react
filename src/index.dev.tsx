import React, { useState } from "react";
import ReactDOM from "react-dom";

import { StormStreamConfig } from "@stormstreaming/stormplayer";
import StormPlayer from "./components/stormPlayer/StormPlayer";
import { StormPlayerConfig } from "./types";

const Asd = () => {
  const [streamConfig, _setStreamConfig] = useState<StormStreamConfig>({
    configurationType: "gateway", // "embedded" or "gateway", please check doc for more info
    stream: {
      serverList: [
        // list of streaming server, 2nd, 3rd etc. will be used as backup
        {
          host: "test.stormstreaming.com",
          application: "live",
          port: 443,
          ssl: true,
        },
      ],
      streamKey:"6530cdd463abad1bc9ab78bbfb728aaa52b8e779",
    },
    settings: {
      //autoStart: true, // if true, video will start playing automatically, but will be muted too
      debug: {
        console: {
          enabled: true,
        },
      },
    },
  });

  const playerConfig: StormPlayerConfig = {
    aspectRatio: "16:9",
    width: "100%",
    title: "Your streaming title",
    subtitle: "Subtitle for your video",
    style: {
      backgroundColor: "#777777",
    },
  };

  return (
    <React.StrictMode>
      <StormPlayer playerConfig={playerConfig} streamConfig={streamConfig} />
    </React.StrictMode>
  );
};

ReactDOM.render(<Asd />, document.getElementById("root"));
