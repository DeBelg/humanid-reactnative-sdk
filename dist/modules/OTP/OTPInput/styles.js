"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    defaultTextFieldStyle: {
        width: 45,
        height: 45,
        borderColor: 'rgba(226, 226, 226, 1)',
        borderWidth: 1,
        borderRadius: 2,
        textAlign: 'center',
        color: 'rgba(226, 226, 226, 1)'
    },
    containerTextField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    touchable: {
        width: '100%',
        height: '100%'
    }
});
exports.default = styles;
