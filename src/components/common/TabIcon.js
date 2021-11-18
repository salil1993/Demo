import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Fonts, Colors, Images } from "../../theme";

const TabIcon = (props) => {
  return (
    <View style={styles.viewMainContainer}>
      <Image
        source={props.focused ? props.activeImg : props.defaultImg}
        style={props.ImgSize}
      />
      <Text
        style={[
          styles.titleText,
          {
            color: props.focused
              ? Colors.redColor
              : Colors.buttonPrimaryTextColor,
          },
        ]}
      >
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewMainContainer: {
    marginTop: 0,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0,0,0,0.06)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.84,
  },
  titleText: {
    paddingTop: 5,
    textAlign: "center",
    fontSize: 11,
    textTransform: "uppercase",
  },
});

export { TabIcon };

