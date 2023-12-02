import { StormPlayerConfig as NativeStormPlayerConfig } from "@stormstreaming/stormplayer";

export type StormPlayerConfig = Omit<NativeStormPlayerConfig, "containerID">;
