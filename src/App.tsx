import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import {User} from './components/User/User';
import {Product} from './components/Products/Product';

function App(): React.JSX.Element {
  console.log('Render App----');
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text style={{marginVertical: 50}}>Zustand</Text>
          <User />
          <Product />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
