import React from 'react';
import {TextField} from "@mui/material";

import './auth_textfield.scss';

const AuthTextField = ({text, width, ...props}) => {
    return (
        <TextField
            {...props}
            className={'customTextField'}
            label={text}
            required
            variant="outlined"
            InputLabelProps={{className: "auth-textfield__label"}}
            InputProps={{className: "auth-textfield__input", sx: { borderRadius: '10px' }}}
            sx={{width: width, borderColor: 'rgb(189, 193, 195)'}}
            autoComplete={'off'}
        />
    );
};

export default AuthTextField;