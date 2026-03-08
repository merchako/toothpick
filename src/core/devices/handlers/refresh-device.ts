import { getPreferenceValues } from "@raycast/api";
import { Device } from "src/core/devices/devices.model";
import { getDevicesService } from "src/core/devices/devices.service";
import { showAnimatedMessage, showErrorMessage, showSuccessMessage, showWarningMessage } from "src/utils";

export async function refreshDevice(device: Device) {
  const { bluetoothBackend } = getPreferenceValues<ExtensionPreferences>();
  const devicesService = getDevicesService(bluetoothBackend);

  if (!device.connected) {
    await showWarningMessage("Device wasn't connected. Connecting it now...");
    await showAnimatedMessage("Connecting device...");

    const connectResult = devicesService?.connectDevice(device.macAddress);

    if (connectResult) {
      await showSuccessMessage("Device connected successfully");
    } else {
      await showErrorMessage("Failed to connect device");
    }
    return;
  }

  await showAnimatedMessage("Refreshing device...");
  const result = devicesService?.refreshDevice(device.macAddress);

  if (result) {
    await showSuccessMessage("Device refreshed successfully");
  } else {
    await showErrorMessage("Failed to refresh device");
  }
}
