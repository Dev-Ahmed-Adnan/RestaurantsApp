import React, { useState } from "react";
import { TextInput, Keyboard } from "react-native";
import { Colors } from "../../../styles";
import { InputProps } from "./Input";

import styles from "./styles";

export const DefaultInput = ({
    placeholder,
    value,
    onChangeText,
    style,
    multiline,
    password,
    keyboardType,
    maxLength,
    editable,
    onFocus,
    autoFocus,
    returnKeyType,
    dismissKeyboard,
    onBlur,
    onSubmitEditing,
    placeholderTextColor,
}: InputProps) => {
    let [showPassword, setShowPassword] = useState(password);
    return (
        <TextInput
            onBlur={onBlur}
            placeholder={placeholder}
            placeholderTextColor={
                placeholderTextColor
                    ? Colors[placeholderTextColor]
                    : Colors.RGBA_BLACK(0.2)
            }
            returnKeyType={returnKeyType}
            autoFocus={autoFocus}
            onFocus={onFocus}
            editable={editable}
            onSubmitEditing={() => {
                if (onSubmitEditing) onSubmitEditing();
                if (dismissKeyboard) Keyboard.dismiss();
            }}
            maxLength={maxLength}
            keyboardType={keyboardType}
            secureTextEntry={showPassword}
            multiline={multiline}
            onChangeText={onChangeText}
            value={value}
            style={[styles.inputStyle, style]}
        />
    );
};
