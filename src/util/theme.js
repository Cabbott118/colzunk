export default {
  palette: {
    primary: {
      main: '#5e8d93',
      contrastText: '#fff',
    },
    secondary: {
      main: '#93a9b5',
      contrastText: '#fff',
    },
  },
  spreadThis: {
    // Common styling objects to be spread to components
    home: {
      background: `url('/images/img-home.jpg') center center/cover no-repeat`,
      height: 'calc(100vh - 64px)',
      boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.2)',
    },
    blogPostImg: {
      width: '100%',
      borderRadius: '5px',
    },
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
    paper: {
      padding: 20,
    },
    imgThumbnail: {
      objectFit: 'cover',
      marginBottom: 16,
      width: '275px',
      height: '175px',
      borderRadius: '5px',
    },
    button: {
      marginTop: 20,
      marginBottom: 20,
      position: 'relative',
      textTransform: 'none',
    },
    navButton: {
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
