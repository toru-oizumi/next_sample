import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  IconButton,
  OutlinedInput,
  TextFieldProps,
} from '@mui/material';
import { forwardRef, useState } from 'react';

import type { InputHTMLAttributes, MouseEvent, ForwardedRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type Props = InputProps & TextFieldProps;

export const PasswordField = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const [showPassword, changeShowPassword] = useState(false);

    const handleClickShowPassword = () => {
      changeShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    return (
      <FormControl fullWidth margin={props.margin} error={props.error}>
        <InputLabel>{props.label}</InputLabel>
        <OutlinedInput
          ref={ref}
          onChange={props.onChange}
          type={showPassword ? 'text' : 'password'}
          value={props.value}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          autoComplete={props.autoComplete}
          placeholder={props.placeholder}
          label={props.label}
        />
        <FormHelperText>{props.helperText}</FormHelperText>
      </FormControl>
    );
  },
);
