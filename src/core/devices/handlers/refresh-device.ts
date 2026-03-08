import { getPreferenceValues } from "@raycast/api";
import { Device } from "src/core/devices/devices.model";
import { getDevicesService } from "src/core/devices/devices.service";
import { showAnimatedMessage, showErrorMessage, showSuccessMessage } from "src/utils";

export async function refreshDevice(device: Device) {
  const { bluetoothBackend } = getPreferenceValues<ExtensionPreferences>();
  const devicesService = getDevicesService(bluetoothBackend);

  await showAnimatedMessage("Refreshing device...");
  const result = devicesService?.refreshDevice(device.macAddress);

  if (result) {
    await showSuccessMessage("Device refreshed successfully");
  } else {
    await showErrorMessage("Failed to refresh device");
  }
}
