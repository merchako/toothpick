import { Device } from "src/core/devices/devices.model";
import { connectDevice } from "./connect-device";
import { disconnectDevice } from "./disconnect-device";

export async function refreshDevice(device: Device) {
  await connectDevice(device);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await disconnectDevice(device);
}
