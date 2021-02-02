import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  button: {
    paddingRight: 10,
  },
  icon: {
    tintColor: '#aaa',
    width: 25,
  },
});

// const iconMap = (iconName) => {
//   switch (iconName) {
//     case 'close':
//       return require('../assets/icons/close.png');
//     case 'add':
//     default:
//       return require('../assets/icons/add.png');
//   }
// };

const HeaderIcon = ({iconName, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <FontAwesome5 name={iconName} color={styles.icon.tintColor} size={25} />
    {/* <Image
      source={iconMap(iconName)}
      style={styles.icon}
      resizeMode="contain"
    /> */}
  </TouchableOpacity>
);

export default HeaderIcon;
