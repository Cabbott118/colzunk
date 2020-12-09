export default {
  palette: {
    primary: {
      // main: '#33c9dc',
      main: '#7E8D85',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3C493F',
      contrastText: '#fff',
    },
  },
  spreadThis: {
    // Common styling objects to be spread to components
    typography: {
      useNextVariants: true,
    },
    form: {
      textAlign: 'center',
    },
    pageTitle: {
      margin: '10px auto 10px auto',
    },
    textField: {
      margin: '10px auto 10px auto',
    },
    button: {
      marginTop: 20,
      position: 'relative',
      textTransform: 'none',
    },
    customError: {
      color: 'red',
      fontSize: '0.8rem',
      marginTop: 5,
    },
    progress: {
      position: 'absolute',
    },
  },
};
