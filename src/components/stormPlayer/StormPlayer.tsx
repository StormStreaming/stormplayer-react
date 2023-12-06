import { forwardRef, useEffect, useRef } from "react";

import {
  StormPlayer as StormPlayerClass,
  StormStreamConfig,
} from "@stormstreaming/stormplayer";
import { StormPlayerConfig } from "../../types";
import { CONTAINER_ID } from "@app/constants";
import { generateRandomId } from "@app/utils";

type Props = {
  playerConfig: StormPlayerConfig;
  streamConfig: StormStreamConfig;
};

const StormPlayer = forwardRef<StormPlayerClass, Props>(
  ({ playerConfig, streamConfig }, ref) => {
    const playerRef = useRef<StormPlayerClass | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isRendered = useRef(false);

    useEffect(() => {
      if (!isRendered.current && containerRef.current) {
        const newContainerId = CONTAINER_ID.replace(
          "{{id}}",
          generateRandomId()
        );
        containerRef.current?.setAttribute("id", newContainerId);

        const instance = new StormPlayerClass(
          { ...playerConfig, containerID: newContainerId },
          streamConfig
        );
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
        if (isRendered.current) {
            playerRef.current?.setPlayerConfig({
                ...playerConfig,
                containerID: playerRef.current?.getRawPlayerConfig().containerID
            });
        }
    }, [JSON.stringify(playerConfig)]);

    useEffect(() => {
        if (isRendered.current) {
            playerRef.current?.setStreamConfig(streamConfig);
        }
    }, [JSON.stringify(streamConfig)]);

    return <div ref={containerRef} />;
  }
);

export default StormPlayer;
