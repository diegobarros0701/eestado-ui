import React from 'react';

import {
    Grid,
    Paper,
    Box,
    FormLabel,
    FormGroup,
    FormControl,
    FormControlLabel,
    TextField,
    Checkbox,
    Button,
    Switch
} from '@material-ui/core';
import {
    Cancel as CancelIcon,
    Save as SaveIcon,
} from '@material-ui/icons';

export default function Formulario({ campos, dados, setDados, dadosIniciais, HandleSubmit, path }) {

    return (
        <>
            <Grid container spacing={3}>
                <Grid item lg={6} md={8} xs={12}>
                    <Paper>
                        <Box p={3}>
                            <form autoComplete='new-password' onSubmit={HandleSubmit}>

                                {campos.map((campo, i) => {
                                    const { name, label, type, required, options } = campo;
                                    let input = '';

                                    if (type === 'text') {
                                        input = <TextField
                                            id={name}
                                            required={required}
                                            label={label}
                                            type='text'
                                            variant='outlined'
                                            fullWidth
                                            value={dados ? dados[name] : ''}
                                            onChange={(event) => {
                                                const { value } = event.target;
                                                setDados({ ...dados, [name]: value });
                                            }}
                                        />;
                                    }

                                    if (type === 'email') {
                                        input = <TextField
                                            id={name}
                                            required={required}
                                            label={label}
                                            type='email'
                                            variant='outlined'
                                            fullWidth
                                            value={dados ? dados[name] : ''}
                                            onChange={(event) => {
                                                const { value } = event.target;
                                                setDados({ ...dados, [name]: value });
                                            }}
                                        />;
                                    }

                                    if (type === 'password') {
                                        input = <TextField
                                            id={name}
                                            required={required}
                                            label={label}
                                            type='password'
                                            variant='outlined'
                                            fullWidth
                                            value={dados ? dados[name] : ''}
                                            onChange={(event) => {
                                                const { value } = event.target;
                                                setDados({ ...dados, [name]: value });
                                            }}
                                        />;
                                    }

                                    if (type === 'switch') {
                                        input = <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={dados[name] ? true : false}
                                                    onChange={(event) => {
                                                        const { checked } = event.target;
                                                        setDados({ ...dados, [name]: checked });
                                                    }}
                                                />
                                            }
                                            label={label}
                                        />;
                                    }

                                    if (type === 'checkbox') {
                                        let _dados = dados;
                                        input = <>
                                            <FormControl>
                                                <FormLabel>{label}</FormLabel>
                                                <FormGroup>
                                                    {Array.isArray(options) && options.map((option, i) => {
                                                        const { value, text } = option;
                                                        return (
                                                            <FormControlLabel
                                                                key={i}
                                                                control={
                                                                    <Checkbox
                                                                        checked={_dados[name][value]}
                                                                        value={value}
                                                                        name={name}
                                                                        onChange={(event) => {
                                                                            const { checked } = event.target;
                                                                            setDados({ ...dados, [name]: { ...dados[name], [value]: checked } });
                                                                        }} />
                                                                }
                                                                label={text}
                                                            />
                                                        );
                                                    })}
                                                </FormGroup>
                                            </FormControl>
                                        </>;
                                    }

                                    return (<Box key={i} mb={2}>{input}</Box>);
                                })}

                                <Button
                                    size='large'
                                    color='primary'
                                    variant='contained'
                                    type='submit'
                                    startIcon={<SaveIcon />}
                                    disabled={JSON.stringify(dados) === JSON.stringify(dadosIniciais)}>
                                    Salvar
                                </Button>
                                <Box ml={1} component='span'></Box>
                                <Button
                                    size='large'
                                    color='default'
                                    variant='text'
                                    href={path}
                                    startIcon={<CancelIcon />}>
                                    Cancelar
                                </Button>
                            </form>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}