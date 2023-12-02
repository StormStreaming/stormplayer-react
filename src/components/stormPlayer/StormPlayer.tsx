import { forwardRef, useEffect, useRef } from "react";

import {
  StormPlayer as StormPlayerClass,
  StormPlayerConfig,
  StormStreamConfig,
} from "@stormstreaming/stormplayer";

type Props = {
  playerConfig: StormPlayerConfig;
  streamConfig: StormStreamConfig;
};

const StormPlayer = forwardRef<StormPlayerClass, Props>(
  ({ playerConfig, streamConfig }, ref) => {
    const playerRef = useRef<StormPlayerClass | null>(null);
    const isRendered = useRef(false);

    useEffect(() => {
      if (!isRendered.current) {
        const instance = new StormPlayerClass(playerConfig, streamConfig);
        console.log("odpaliło nową instancję!");
        playerRef.current = instance;

        if (ref) {
          if (typeof ref === "function") {
            ref(instance);
          } else if (ref) {
            ref.current = instance;
          }
        }
      }
      isRendered.current = true;
    }, []);

    useEffect(() => {
      playerRef.current?.setPlayerConfig(playerConfig);
    }, [playerConfig]);

    useEffect(() => {
      playerRef.current?.setStreamConfig(streamConfig);
    }, [streamConfig]);

    return <div id={playerConfig.containerID} />;
  }
);

export default StormPlayer;
