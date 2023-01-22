import { injectDevices } from "./app.module.js";
import { Led } from "./devices/led/led.class.js";
import { getDevice } from "./common/getDevice.js";

export const run = (board: any) => {
  const devices = injectDevices(board);
  const { leds } = devices
  
  // active all devices of category
  leds.forEach((led: Led) => {
    led.mode()
  })

  // extract individual led or any device
  // this method can use with pin or customName and return one device
  const greenLed = getDevice(leds, 'pin', 13)
  const redLed = getDevice(leds, 'pin', 12)

  // code
  greenLed.turnOff()
  redLed.turnOff()
};