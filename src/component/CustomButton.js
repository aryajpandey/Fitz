import React from "react";
import { Text, TouchableHighlight } from "react-native";
import s from "../style";

const CustomButton = ({ onPress, title, style }) => (
  <TouchableHighlight onPress={onPress} style={[s.standardButton, style]}>
    <Text style={s.buttonText}>{title}</Text>
  </TouchableHighlight>
);

export default CustomButton;
