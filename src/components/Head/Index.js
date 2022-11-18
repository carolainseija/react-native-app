import { StyleSheet, Text, TouchableNativeFeedback, View, Alert } from 'react-native';

 function Head() {
  return (
    <View style={styles.head}>
     <Text>Inicio - Links - Contactos</Text>
      <TouchableNativeFeedback onPress={() => Alert.alert('Hola, este es un nuevo mensaje!')}><Text>Ver mensaje Nuevo</Text></TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
  innerHeight: "30px",
  FontFace: "40px",
  }
});

export default Head;