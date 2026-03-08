import { getPreferenceValues } from "@raycast/api";
import { getDevicesService } from "src/core/devices/devices.service";
import { showAnimatedMessage, showErrorMessage, showSuccessMessage } from "src/utils";

export default async function refreshBluetooth() {
  const { bluetoothBackend } = getPreferenceValues<ExtensionPreferences>();
  const devicesService = getDevicesService(bluetoothBackend);

  await showAnimatedMessage("Refreshing Bluetooth...");
  const result = devicesService?.refreshBluetooth();

  if (result) {
    await showSuccessMessage("Bluetooth refreshed successfully");
  } else {
    await showErrorMessage("Failed to refresh Bluetooth");
  }
}
