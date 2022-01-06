import React from "react";
import ReactDOM from "react-dom";

import StormPlayer from "./components/stormplayer/StormPlayer";

const libraryConfig = {
    role: "player",
    connectionType: "direct",
    stream: {
        serverList: [{ host: "localhost", port: 80, ssl: false }],
        sourceList: [
          {
            protocol: "storm",
            streamName: "test",
            application: "live",
          },
        ],
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
            scalingMode: "fill" // "letterbox", "crop", "fill", "resize"
        },
    },
};

ReactDOM.render(
    <React.StrictMode>
        <StormPlayer
            containerID="player1"
            width={1280}
            height={720}
            title="Your streaming video title"
            subtitle="Subtitle for your video"
            unmuteText="UNMUTE SOUND"
            config={libraryConfig}
        />
    </React.StrictMode>,
    document.getElementById("root")
);
