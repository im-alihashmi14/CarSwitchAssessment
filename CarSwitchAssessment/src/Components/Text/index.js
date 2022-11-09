import React from 'react';
import {StyleSheet, Text as RNText, View, TextProps} from 'react-native';

const Text = (props: TextProps) => {
  return <RNText style={[styles.text, props.style]}>{props.children}</RNText>;
};

export default Text;

const styles = StyleSheet.create({
  text: {color: 'black'},
});
