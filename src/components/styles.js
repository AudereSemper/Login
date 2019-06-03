import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  alignedSelfCenter: {
    alignSelf: 'center',
  },

  buttonContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#000000',
  },

  buttonFont: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center'
  },

  contentCenter: {
    alignSelf: 'center',
  },

  container: {
    width: '100%',
    height: '100%',
  },

  containerFlexRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },

  flex1: {
    flex: 1,
  },

  failed: {
    borderColor: 'red',
    borderWidth: 1,
  },

  inputContainer: {
    margin: 10,
    borderBottomWidth: 1,
    borderColor: "#000000"
  },

  roundAvatar : {
    flex: 1,
    height: 100,
    width: 100,
    borderRadius: 300 /2,
    borderWidth: 1,
  },  

  success: {
    borderColor: 'green',
    borderBottomWidth: 2,
  },
});
