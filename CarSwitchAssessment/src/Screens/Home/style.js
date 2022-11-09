import {StatusBar, StyleSheet} from 'react-native';
import colors from '../../Config/colors';
import {heightRef, widthRef} from '../../Config/screenSize';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
  },
  contentContainerStyle: {flex: 1, alignItems: 'center'},
  InputField: {
    width: '100%',
    paddingHorizontal: 10 * widthRef,
    borderBottomWidth: 1,
    borderColor: colors.grey,
    paddingVertical: 10 * heightRef,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
