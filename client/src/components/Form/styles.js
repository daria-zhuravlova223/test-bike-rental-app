import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'no-wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 30,
  },
  formInputs: {
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'center'
  },
  formTitle: {
    alignSelf: 'center',
  },
  buttonSubmit: {
    margin: 10,
  },
}));