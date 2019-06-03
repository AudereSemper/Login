import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },

  flexOne: {
    flex: 1,
    height: '100%'
  },

  flexOneCentered: {
    flex: 1,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: 0,
  },

  image: {
    borderRadius: 150 / 2, 
    width: 150,
    height: 150,
  },

  input: {
    borderBottomColor: '#FFF',
    borderBottomWidth: 3,
  },

  inputContainer: {
    flex: 1,
  },

  row: {
    margin: 20,
    flexDirection: 'row',
  }
});