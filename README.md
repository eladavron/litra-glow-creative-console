
# Litra Glow Plugin for Logitech Creative Console

A plugin for the Logitech Creative Console that allows you to control the Litra Glow light.

This project uses and builds upon the excellent [`litra`](https://github.com/timrogers/litra) package by [timrogers](https://github.com/timrogers).

> [!NOTE]
> Currently the plugin only controls *all* connected Litra Glow devices together due to SDK limitations.
> We plan to add support for controlling individual devices in the future.

## Features

- Toggle lights on/off
- Adjust brightness (using dials)
- Adjust color temperature (using dials)

## Known Issues

- Sometimes when lowering the temperature, it'll jump straight to 0 (warm).

## Planned Features

- [ ] Support for controlling individual devices (currently all devices are controlled together)
- [ ] Increase/decrease brightness and color temperature by a fixed amount when pressing the buttons (currently only using dials)
- [ ] Set predetermined brightness and color temperature levels when pressing the buttons (currently only support increments using dials)

## Credits

- [timrogers/litra](https://github.com/timrogers/litra) — JavaScript control library for Litra lights

## Special Thanks

- **Paul Fitzsimons** from **Logitech** for providing me with a Creative Console device for development and testing.

## License

MIT License. See [LICENSE](LICENSE) file.