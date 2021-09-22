import React from 'react';
import {StatusBar, Text, View, StyleSheet} from 'react-native';
import {theme} from './theme';
import {Accordion} from './components';

const App: React.FC = () => {
  React.useEffect(() => {
    StatusBar.setBarStyle(theme.statusBarStyle);
    StatusBar.setBackgroundColor(theme.background);
  }, []);

  return (
    <View style={styles.container}>
      <Accordion isOpen={false} headingText={'hello'}>
        <Text>Do you see me?</Text>
      </Accordion>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});
