import React from 'react';
import {StatusBar, Text, View, StyleSheet} from 'react-native';
import {theme} from './theme';
import {Accordion} from './components';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    StatusBar.setBarStyle(theme.statusBarStyle);
    StatusBar.setBackgroundColor(theme.background);
  }, []);

  return (
    <View style={styles.container}>
      <Accordion
        onPress={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        headingText={'Linear Algebra'}
        subHeadingText={'15 Tests'}>
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
