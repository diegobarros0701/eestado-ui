import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {
  createMuiTheme,
  ThemeProvider,
  fade,
  makeStyles,
} from '@material-ui/core/styles';
import {
  Search as SearchIcon,
  Cancel as CancelIcon
} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    default: {
      main: grey[50],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

export default function BarraContexto({ titulo, acoes, buscar, limparBusca }) {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [buscou, setBuscou] = useState(false);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position='static' color='primary'>
          <Toolbar>
            <Typography className={classes.title} variant='h6' noWrap>
              {titulo}
            </Typography>
            {acoes &&
              acoes.map((acao, i) => {
                const { link, texto, tipo, icone, click } = acao;
                return (
                  <span key={i}>
                    {i > 0 && <Box ml={1} component='span'></Box>}
                    <Button
                      variant={tipo ? tipo : 'contained'}
                      color='default'
                      key={i}
                      onClick={() => {
                        return click();
                      }}
                      href={link}>
                      {icone}&nbsp;{texto}
                    </Button>
                  </span>
                );
              })}
            {buscar &&
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (search.length >= 3) {
                      buscar({ variables: { search: `%${ search }%` } });
                      setBuscou(true);
                    }
                  }}>
                  <InputBase
                    placeholder='Buscar...'
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'busca' }}
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                  />
                  {buscou &&
                    <Button
                      style={{ color: '#fff' }}
                      onClick={() => {
                        limparBusca();
                        setSearch('');
                        setBuscou(false);
                      }}><CancelIcon /></Button>
                  }
                </form>
              </div>
            }
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Box m={4} />
    </div>
  );
}
