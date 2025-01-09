<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
<uses-permission android:name="android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS" />

// index.js headless task
import BackgroundService from 'react-native-background-actions';

BackgroundService.on('start', async () => {
  console.log('Headless task running');
  // Run your background task here
});