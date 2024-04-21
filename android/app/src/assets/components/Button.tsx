import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    filled?: boolean;
    color?: string;
}

const Button: React.FC<ButtonProps> = ({ title, filled, color, onPress, style }) => {
    const filledBgColor = color || 'blue'; // Default color if not provided
    const outlinedColor = 'white'; // Assuming a default color for outlined button
    const bgColor = filled ? filledBgColor : outlinedColor;
    const textColor = filled ? 'white' : 'blue'; // Assuming default text color

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: bgColor }, style]}
            onPress={onPress}
        >
            <Text style={{ fontSize: 18, color: textColor }}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderColor: 'blue', // Assuming default border color
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Button;
