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
        if (ref) {
          if (typeof ref === "function") {
            ref(instance);
          } else if (ref) {
            ref.current = instance;
          }
          playerRef.current = instance;
        }
      }
      isRendered.current = true;
    }, []);

    useEffect(() => {
      console.log("komponent wywołuje `setPlayerConfig`");
      playerRef.current?.setPlayerConfig(playerConfig);
    }, [playerConfig]);

    useEffect(() => {
      playerRef.current?.setStreamConfig(streamConfig);
    }, [streamConfig]);

    return <div id={playerConfig.containerID} />;
  }
);

export default StormPlayer;
