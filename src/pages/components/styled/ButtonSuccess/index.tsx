import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ButtonSuccessProps {
  width?: string;
  alignLeft?: boolean;
}

const ButtonSuccess = styled(Button)<ButtonSuccessProps>`
  width: ${(props) => props.width || '80%'};
  text-transform: none;
  padding: 0.6rem 0.75rem;
  margin: ${(props) => (props.alignLeft ? '' : '0 auto')};
`;

export default ButtonSuccess;
