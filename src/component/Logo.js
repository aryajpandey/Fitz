import React from 'react';
import {View, Image, Text} from react-native;
import styles from "../style";

const Logo = () => (
<View style={{ flex: 1.5, top: 80 }}>
<Image
  resizeMode={"stretch"}
  source={require("../../assets/logo.png")}
  style={styles.logo}
/>
<Text style={styles.subtitle}>Train Anywhere</Text>
</View>
);

export default Logo;