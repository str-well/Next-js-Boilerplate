import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.terreiro.app',
  appName: 'Meu Terreiro',
  webDir: 'out',
  server: {
    url: 'http://localhost:3000',
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

export default config;
