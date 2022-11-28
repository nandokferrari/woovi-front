import { TextField } from '@mui/material';
import * as React from 'react';
import {
    Control,
    Controller,
    FieldValues,
    RegisterOptions,
} from 'react-hook-form';
import styled from 'styled-components';

interface IRHFinputProps {
    control: Control<FieldValues, any>;
    name: string;
    label: string;
    defaultValue?: string | number;
    type?: string;
    autoComplete?: string;
    select?: boolean;
    children?: React.ReactNode;
    rules?: Omit<
        RegisterOptions<FieldValues, any>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
    >;
}

export const RHFinput: React.FC<IRHFinputProps> = ({
    control,
    name,
    label,
    defaultValue = '',
    type = 'text',
    autoComplete = '',
    select = false,
    rules,
    children,
}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({
                field: { onChange },
                fieldState: { error, isDirty },
            }) => (
                <TextField
                    select={select}
                    label={label}
                    onChange={onChange}
                    defaultValue={defaultValue}
                    type={type}
                    autoComplete={autoComplete}
                    error={!!error}
                    helperText={error && '* Campo obrigatório'}
                >
                    {children}
                </TextField>
            )}
        />
    );
};
