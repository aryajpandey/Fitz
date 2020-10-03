import React from "react";
import { TextInput, StyleSheet } from "react-native";
import {
  baseComponent,
  backgroundColor,
  border,
  smallTextSize,
} from "../style";

const CustomInput = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  style,
}) => (
  <TextInput
    style={[styles.inputText, style]}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    value={value}
    onChangeText={onChangeText}
  />
);

const styles = StyleSheet.create({
  inputText: {
    ...baseComponent,
    backgroundColor: backgroundColor,
    borderColor: border,
    fontSize: smallTextSize,
    borderWidth: 1,
  },
});

export default CustomInput;
