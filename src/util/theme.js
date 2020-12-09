export default {
  palette: {
    primary: {
      // main: '#33c9dc',
      main: '#586994',
      contrastText: '#eee',
    },
    secondary: {
      main: '#06908f',
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
