import React, {useEffect} from "react";

import {GUIStormConfig} from "@stormstreaming/stormplayer";
import {StormPlayer as StormPlayerClass} from "@stormstreaming/stormplayer";
import {StormLibraryConfig} from "@stormstreaming/stormlibrary";
import {StormPlayerConfig} from "@stormstreaming/stormplayer";

type Props = GUIStormConfig & {
    config: StormLibraryConfig;
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
    const guiConfig: StormPlayerConfig = {
        containerID,
        width,
        height,
        title,
        subtitle,
        unmuteText,
    };

    useEffect(() => {
        new StormPlayerClass(guiConfig, config);
    }, []);

    return <div id={containerID}/>;
};

export default StormPlayer;
