import { forwardRef, useEffect } from "react";

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
    useEffect(() => {
      const instance = new StormPlayerClass(playerConfig, libraryConfig);
      if (ref) {
        if (typeof ref === "function") {
          ref(instance);
        } else if (ref) {
          ref.current = instance;
        }
      }
    }, []);

    return <div id={playerConfig.containerID} />;
  }
);

console.log("StormPlayer");

export default StormPlayer;
