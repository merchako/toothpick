import { Device } from "../devices.model";
import { disconnectDevice } from "./disconnect-device";
import { connectDevice } from "./connect-device";
import { showAnimatedMessage, showWarningMessage } from "src/utils";

export async function refreshDevice(device: Device): Promise<boolean> {
  const disconnected = await disconnectDevice(device);

  if (disconnected) {
    await showAnimatedMessage("Reconnecting...");
    await new Promise((resolve) => setTimeout(resolve, 2000));
  } else {
    await showWarningMessage("Failed to disconnect. Reconnecting anyway…");
  }

  return connectDevice(device);
}
