import { forwardRef, useEffect, useRef } from "react";

import {
  StormPlayer as StormPlayerClass,
  StormPlayerConfig,
  StormLibraryConfig,
} from "@stormstreaming/stormplayer";

type Props = {
  playerConfig: StormPlayerConfig;
  libraryConfig: StormLibraryConfig;
};

const StormPlayer = forwardRef<StormPlayerClass, Props>(
  ({ playerConfig, libraryConfig }, ref) => {
    const isRendered = useRef(false);

    useEffect(() => {
      if (!isRendered.current) {
        const instance = new StormPlayerClass(playerConfig, libraryConfig);
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

    return <div id={playerConfig.containerID} />;
  }
);

export default StormPlayer;
