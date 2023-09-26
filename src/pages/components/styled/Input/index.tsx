import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const Input = styled(TextField)`
  & .MuiInputBase-root {
    padding: 0.6rem;
  }

  input {
    padding: 0;
  }
`;

export default Input;
