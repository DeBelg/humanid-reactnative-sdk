import { StyleSheet, Platform } from "react-native";
import { colors, globalStyles, metrics } from "../../themes";
import { RFPercentage, RFValue } from "../../helpers";
import DeviceInfo from "react-native-device-info";

let hasNotch = DeviceInfo.hasNotch();

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    ...(Platform.OS === "ios" && { marginTop: 20 }),
  },
  container: {
    width: metrics.screenWidth,
    backgroundColor: colors.white,
    height: metrics.screenHeight,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: colors.gray,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: colors.gray,
    paddingHorizontal: 25,
  },
  descriptionBottom: {
    fontSize: 14,
    textAlign: "center",
    color: colors.gray,
  },
  phoneNumber: {
    color: colors.primary,
    textAlign: "center",
    marginTop: 1.5,
  },
  textSpace28: {
    marginBottom: 28,
  },
  textSpace21: {
    marginBottom: 21,
  },
  resendCode: {
    fontSize: 14,
    marginTop: RFValue(27.5),
    color: colors.primary,
    alignSelf: "flex-start",
    paddingLeft: RFValue(25),
  },
  resendActivity: {
    marginTop: RFValue(27.5),
    alignSelf: "center",
  },
  containerDescription: {
    marginTop: RFValue(85),
  },
  formContainer: {
    alignItems: "center",
    marginTop: 44,
    marginBottom: 25,
  },
  otpView: {
    width: RFPercentage(45),
    height: 50,
    paddingHorizontal: RFValue(15),
  },
  otpFieldStyle: {
    width: RFValue(65),
    height: 50,
    ...globalStyles.otpText,
    color: colors.black,
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderLine,
    paddingBottom: -20,
  },
  otpHighlightStyle: {
    width: RFValue(65),
    height: 50,
    ...globalStyles.otpText,
    color: colors.black,
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.primary,
    paddingBottom: -20,
  },
  containerModalLoading: {
    flexDirection: "column",
    paddingVertical: 25,
    marginHorizontal: 40,
    paddingHorizontal: 25,
    backgroundColor: "white",
    borderRadius: 12,
  },
  textLoading: {
    ...globalStyles.normal,
    alignSelf: "center",
    marginTop: 4,
    color: colors.black,
    textAlign: "center",
  },
  toolbar: {
    ...(Platform.OS === "ios" && hasNotch
      ? { height: 54 }
      : Platform.OS === "ios"
      ? { height: 24 }
      : { height: 0 }),
    width: metrics.screenWidth,
    backgroundColor: "#023b60",
    alignItems: "flex-start",
  },
});

export default styles;