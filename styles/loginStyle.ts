import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    //justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 10,
    // shadowColor: '#adff2f',
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.3,
    // shadowRadius: 10,
    // elevation: 10, // Android
    // borderRadius: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#adff2f',
    color: '#adff2f',
    padding: 18,
    marginBottom: 16,
    borderRadius: 8,
    fontSize: 16
  },
  button: {
    width: '100%',
    backgroundColor: '#adff2f',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
  registerText: {
    color: '#adff2f',
    marginTop: 20,
    textDecorationLine: 'underline',
    textShadowColor: '#adff2f',
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 10
  },
});
export default styles;