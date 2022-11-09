import React, {useCallback, useRef, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import InputField from '../../Components/InputField';
import Text from '../../Components/Text';
import {getAgeByName} from '../../Services';
import {styles} from './style';

const Home = () => {
  const timeoutId = useRef(null);
  const inputRef = useRef(null);
  const [ageData, setAgeDate] = useState();

  const AgebyNameCallback = useCallback(text => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
    }
    timeoutId.current = setTimeout(() => {
      getAgeByName(text, ({success, data}) => {
        success && setAgeDate(data);
      });
    }, 300);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.InputField}>
          <InputField
            showBack
            ref={inputRef}
            onBackPress={() => {
              inputRef.current.setNativeProps({text: ''});
            }}
            placeholder="Enter text to search"
            onChangeText={AgebyNameCallback}
            enableElevation
          />
        </View>
        <Text>{JSON.stringify(ageData, null, 2)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
