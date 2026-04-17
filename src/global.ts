import { Device, findDevices } from 'litra';

function getLights(): Device[] {
    const devices = findDevices();
    return devices;
}

export function getLightBySerialNumber(serialNumber: string): Device | undefined {
    const devices = getLights();
    return devices.find(device => device.serialNumber === serialNumber)
}