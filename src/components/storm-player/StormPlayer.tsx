import React, { useEffect } from "react";

import { GUIStormConfig } from "@stormstreaming/storm-player";
import { StormPlayer as StormPlayerClass } from "@stormstreaming/storm-player/dist/cjs/index";
import { IStormConfig } from "@stormstreaming/stormlibrary";

type Props = GUIStormConfig & {
  config: IStormConfig;
};

const StormPlayer: React.FC<Props> = ({
  containerID,
  width,
  height,
  title,
  subtitle,
  unmuteText,
  config,
}) => {
  const guiConfig: GUIStormConfig = {
    containerID,
    width,
    height,
    title,
    subtitle,
    unmuteText,
  };

  useEffect(() => {
    new StormPlayerClass(guiConfig, config, []);
  }, []);

  return <div id={containerID} />;
};

export default StormPlayer;
