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
  title: {
    fontSize: 28,
    color: '#adff2f',
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#adff2f',
    color: '#adff2f',
    padding: 18,
    marginBottom: 16,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#adff2f',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    color: '#adff2f',
    marginTop: 8,
    fontSize: 14,
  },
  linkText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
export default styles;