import React from "react";
import {
    StyleProp,
    KeyboardTypeOptions,
    ReturnKeyTypeOptions,
    TextStyle,
    ViewStyle,
} from "react-native";
import { DefaultInput } from "./DefaultInput";
import { IconsName } from "../../../assets/svgs";
// import { CallingCode } from '../../../@types';
import { ColorsTypes } from "../../../styles/colors";

export type InputProps = {
    type?: "defaultInput";
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    multiline?: boolean;
    password?: boolean;
    keyboardType?: KeyboardTypeOptions | undefined;
    maxLength?: number;
    style?: StyleProp<TextStyle> | undefined;
    editable?: boolean;
    onFocus?: () => void;
    autoFocus?: boolean;
    returnKeyType?: ReturnKeyTypeOptions | undefined;
    dismissKeyboard?: boolean;
    onBlur?: () => void;
    onSubmitEditing?: () => void;
    error?: string;
    iconName?: IconsName | undefined;
    withCountyPicker?: boolean;
    // onCountrySelect?: (value: CallingCode) => void,
    placeholderTextColor?: keyof ColorsTypes;
    title?: string;
    containerStyle?: ViewStyle;
    dropDown?: boolean;
    dropDownData?: Array<any>;
    onSelectDropDonwItem?: (item: any) => void;
};
export const Input = ({ type = "defaultInput", ...props }: InputProps) => {
    const Component = {
        defaultInput: <DefaultInput {...props} />,
    };
    return Component[type];
};
