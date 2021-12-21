import React from "react";
import ReactDOM from "react-dom";

import StormPlayer from "./components/storm-player/StormPlayer";

const libraryConfig = {
  role: "player",
  connectionType: "direct",
  stream: {
    gatewayList: [
      {
        host: "serpent.web-anatomy.com",
        application: "live",
        port: 443,
        ssl: true,
      },
    ],
    groupName: "test",
    serverList: [{ host: "stormprod.web-anatomy.com", port: 443, ssl: true }],
    sourceList: [
      {
        protocol: "storm",
        streamName: "test_lq",
        application: "live",
        streamInfo: { label: "460p" },
      },
      {
        protocol: "storm",
        streamName: "test_sd",
        application: "live",
        streamInfo: { label: "720p" },
      },
    ],
    // security
    security: {
      type: "token",
      token: "abcdef",
    },
  },
  settings: {
    autoStart: true,
    restartOnError: true,
    reconnectTime: 1.0,
    enabledProtocols: ["MSE", "HLS"],
    buffer: {
      minValue: 0.2,
      startValue: 0.5,
      maxValue: 3,
      targetValue: 1.0,
    },
    video: {
      scalingMode: "fill", // "letterbox", "crop", "fill", "resize"
      containerID: "videoContainer",
      width: 640,
      height: 360,
    },
    audio: {
      startVolume: 100,
      maxVolume: 100,
      rememberValue: true,
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <StormPlayer
      containerID="player1"
      width="1280"
      height="720"
      title="Your streaming video title"
      subtitle="Subtitle for your video"
      unmuteText="UNMUTE SOUND"
      config={libraryConfig}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
