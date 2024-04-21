import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Carbofats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.circle} />
          <View style={styles.rightView}>
            <Text>Eaten</Text>
            <Text>
              <Text style={styles.textBold}>48GL</Text> of 64 GL
            </Text>
          </View>
        </View>
        <View style={styles.carbFats}>
          <View>
            <Text>Carbs: 50%</Text>
            <View style={styles.carbFatsSub} />
          </View>
          <View>
            <Text>Fats: 20%</Text>
            <View style={styles.carbFatsSub} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Carbofats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: width * 0.90,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  circle: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 1.5,
    borderWidth: 1,
    borderColor: 'black',
  },
  rightView: {
    flex: 1,
    marginLeft: 20,
  },
  textBold: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  carbFats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  carbFatsSub: {
    width: '100%',
    height: 2,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
  },
});
