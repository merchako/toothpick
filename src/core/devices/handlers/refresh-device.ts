import { Device } from "src/core/devices/devices.model";
import { showWarningMessage } from "src/utils";
import { connectDevice } from "./connect-device";
import { disconnectDevice } from "./disconnect-device";

export async function refreshDevice(device: Device) {
  const disconnectResult = await disconnectDevice(device);
  if (!disconnectResult) {
    await showWarningMessage("Connecting anyway…");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  await connectDevice(device);
}
