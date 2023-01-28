import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button({ label, onPress }){
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 200,
        height: 40,
        padding: 3,
        backgroundColor: '#f98b88',
      },
      button: {        
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonLabel: {
        color: '#000',
        fontSize: 25,
      },
});