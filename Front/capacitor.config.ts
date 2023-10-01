import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.buskko.app',
  appName: 'buskko',
  webDir: 'dist',
  server: {
    androidScheme: 'http'
  }
};

export default config;
