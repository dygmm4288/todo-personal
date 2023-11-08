const lightTheme = {
  todo: {
    todoBoxColor: "rgb(255, 255, 255, 0.3)",
    todoBoxHoverColor: "white",
    todoTextColor: "black",
  },
  application: {
    textColor: "black",
    applicationBlur: "blur(0.5rem)",
    backgroundColor: "",
  },
};
const darkTheme = {
  todo: {
    todoBoxColor: "rgba(100,100,100,0.5)",
    todoBoxHoverColor: "rgba(100,100,100,0.35)",
    todoTextColor: "white",
  },
  application: {
    textColor: "white",
    applicationBlur: "",
    backgroundColor: "black",
  },
};
const theme = { lightTheme, darkTheme };
export default theme;
