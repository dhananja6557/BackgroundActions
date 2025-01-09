import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackgroundService from 'react-native-background-actions';

const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

const veryIntensiveTask = async (taskDataArguments) => {
  const { delay } = taskDataArguments;

  console.log('Background task started');
  while (BackgroundService.isRunning()) {
    console.log('Task running...');
    await BackgroundService.updateNotification({
      taskDesc: 'Task running at: ' + new Date().toLocaleTimeString(),
    });
    await sleep(delay);
  }

  console.log('Background task stopped');
};

const options = {
  taskName: 'Example',
  taskTitle: 'Background Task',
  taskDesc: 'ExampleTask description',
  taskIcon: {
    name: 'ic_launcher',
    type: 'mipmap',
  },
  color: '#ff00ff',
  linkingURI: 'yourSchemeHere://chat/jane',
  parameters: {
    delay: 1000,
  },
  foregroundService: true,
};

const App = () => {
  const startBackgroundTask = async () => {
    await BackgroundService.start(veryIntensiveTask, options);
    await BackgroundService.updateNotification({ taskDesc: 'New ExampleTask description' });
  }

  const stopBackgroundTask = async () => {
    await BackgroundService.stop();
  }

  return (
    <View style={styles.construct}>
      <TouchableOpacity
        onPress={startBackgroundTask}
        style={styles.button}>
        <Text style={styles.buttonText}>Start Process</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={stopBackgroundTask}
        style={styles.button}>
        <Text style={styles.buttonText}>End Process</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  construct: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})