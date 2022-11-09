import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import Assets from '../../Assets';
import colors from '../../Config/colors';
import {fontRef, heightRef, widthRef} from '../../Config/screenSize';

const InputField = (
  {enableElevation, showBack, onBackPress = () => {}, ...props}: TextInputProps,
  ref,
) => {
  return (
    <View style={styles.inputFieldContainer}>
      <TextInput
        placeholderTextColor={colors.grey}
        {...props}
        ref={ref}
        style={[styles.input, enableElevation && styles.elevation, props.style]}
      />
      {showBack && (
        <TouchableOpacity style={styles.back} onPress={onBackPress}>
          <Image source={Assets.left} style={styles.Image} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.forwardRef(InputField);

const styles = StyleSheet.create({
  elevation: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Image: {
    height: 30 * heightRef,
    width: 30 * heightRef,
    tintColor: colors.darkGrey,
  },
  back: {
    position: 'absolute',
    left: 15 * widthRef,
  },
  inputFieldContainer: {
    height: 60 * heightRef,
    width: '95%',
    marginVertical: 10 * heightRef,
    borderRadius: 40,
    // overflow: 'hidden',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 40,
    height: '100%',
    width: '100%',
    paddingHorizontal: 25 * widthRef,
    paddingLeft: 55 * widthRef,
    fontSize: 16 * fontRef,
    backgroundColor: 'white',
    color: 'black',
  },
});
