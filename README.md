# App settings

App settings is a nativescript plugin it allow user to open setting in Android and Ios .

## Installation

```bash
tns plugin add nativescript-app-settings
```

## Usage

```javascript
const wifiSettings = require("nativescript-app-settings");
// open general settings
wifiSettings.openGeneralSettingsOnDevice();

// open wifi settings
wifiSettings.openWifiSettingsOnDevice();

// open bluetooth settings
wifiSettings.openBluetoothSettingsOnDevice();
```

## example

```bash
cd example
npm install
tns run android
tns run ios
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
