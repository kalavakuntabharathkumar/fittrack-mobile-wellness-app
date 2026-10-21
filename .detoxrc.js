module.exports = {
  testRunner: { args: { $0: "jest", config: "e2e/jest.config.js" }, jest: { setupTimeout: 120000 } },
  apps: {
    "ios.debug": { type: "ios.app", binaryPath: "ios/build/Build/Products/Debug-iphonesimulator/FitTrack.app", build: "xcodebuild -workspace ios/FitTrack.xcworkspace -scheme FitTrack -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build" },
    "android.debug": { type: "android.apk", binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk", build: "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug" },
  },
  devices: {
    "ios.sim": { type: "ios.simulator", device: { type: "iPhone 16" } },
    "android.emu": { type: "android.emulator", device: { avdName: "Pixel_7_API_35" } },
  },
  configurations: {
    "ios.sim.debug": { device: "ios.sim", app: "ios.debug" },
    "android.emu.debug": { device: "android.emu", app: "android.debug" },
  },
};
