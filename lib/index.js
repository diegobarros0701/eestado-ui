'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Snackbar = _interopDefault(require('@material-ui/core/Snackbar'));
var styles = require('@material-ui/core/styles');
var lab = require('@material-ui/lab');
var Box = _interopDefault(require('@material-ui/core/Box'));
var AppBar = _interopDefault(require('@material-ui/core/AppBar'));
var Toolbar = _interopDefault(require('@material-ui/core/Toolbar'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var InputBase = _interopDefault(require('@material-ui/core/InputBase'));
var icons = require('@material-ui/icons');
var Button = _interopDefault(require('@material-ui/core/Button'));
var colors = require('@material-ui/core/colors');
var core = require('@material-ui/core');
var Backdrop = _interopDefault(require('@material-ui/core/Backdrop'));
var CircularProgress = _interopDefault(require('@material-ui/core/CircularProgress'));
var TableContainer = _interopDefault(require('@material-ui/core/TableContainer'));
var Paper = _interopDefault(require('@material-ui/core/Paper'));
var Table = _interopDefault(require('@material-ui/core/Table'));
var TableHead = _interopDefault(require('@material-ui/core/TableHead'));
var TableBody = _interopDefault(require('@material-ui/core/TableBody'));
var TableRow = _interopDefault(require('@material-ui/core/TableRow'));
var TableCell = _interopDefault(require('@material-ui/core/TableCell'));
var Link = _interopDefault(require('@material-ui/core/Link'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var useStyles = styles.makeStyles(function (theme) {
  return {
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  };
});
function Alerta(_ref) {
  var titulo = _ref.titulo,
      tipo = _ref.tipo,
      texto = _ref.texto;
  var classes = useStyles();

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return React__default.createElement("div", {
    className: classes.root
  }, React__default.createElement(Snackbar, {
    open: open,
    autoHideDuration: 5000,
    onClose: handleClose
  }, React__default.createElement(lab.Alert, {
    severity: tipo ? tipo : 'error',
    onClose: handleClose
  }, titulo && React__default.createElement(lab.AlertTitle, null, titulo), texto)));
}

var theme = styles.createMuiTheme({
  palette: {
    "default": {
      main: colors.grey[50]
    }
  }
});
var useStyles$1 = styles.makeStyles(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: _defineProperty({
      flexGrow: 1,
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    search: _defineProperty({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: styles.fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: styles.fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: _defineProperty({
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: 120,
      '&:focus': {
        width: 200
      }
    })
  };
});
function BarraContexto(_ref) {
  var titulo = _ref.titulo,
      acoes = _ref.acoes,
      buscar = _ref.buscar,
      limparBusca = _ref.limparBusca;
  var classes = useStyles$1();

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      buscou = _useState4[0],
      setBuscou = _useState4[1];

  return React__default.createElement("div", {
    className: classes.root
  }, React__default.createElement(styles.ThemeProvider, {
    theme: theme
  }, React__default.createElement(AppBar, {
    position: "static",
    color: "primary"
  }, React__default.createElement(Toolbar, null, React__default.createElement(Typography, {
    className: classes.title,
    variant: "h6",
    noWrap: true
  }, titulo), acoes && acoes.map(function (acao, i) {
    var link = acao.link,
        texto = acao.texto,
        tipo = acao.tipo,
        icone = acao.icone,
        click = acao.click;
    return React__default.createElement("span", {
      key: i
    }, i > 0 && React__default.createElement(Box, {
      ml: 1,
      component: "span"
    }), React__default.createElement(Button, {
      variant: tipo ? tipo : 'contained',
      color: "default",
      key: i,
      onClick: function onClick() {
        return click();
      },
      href: link
    }, icone, "\xA0", texto));
  }), buscar && React__default.createElement("div", {
    className: classes.search
  }, React__default.createElement("div", {
    className: classes.searchIcon
  }, React__default.createElement(icons.Search, null)), React__default.createElement("form", {
    onSubmit: function onSubmit(event) {
      event.preventDefault();

      if (search.length >= 3) {
        buscar({
          variables: {
            search: "%".concat(search, "%")
          }
        });
        setBuscou(true);
      }
    }
  }, React__default.createElement(InputBase, {
    placeholder: "Buscar...",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'busca'
    },
    value: search,
    onChange: function onChange(event) {
      return setSearch(event.target.value);
    }
  }), buscou && React__default.createElement(Button, {
    style: {
      color: '#fff'
    },
    onClick: function onClick() {
      limparBusca();
      setSearch('');
      setBuscou(false);
    }
  }, React__default.createElement(icons.Cancel, null))))))), React__default.createElement(Box, {
    m: 4
  }));
}

function Formulario(_ref) {
  var campos = _ref.campos,
      dados = _ref.dados,
      setDados = _ref.setDados,
      dadosIniciais = _ref.dadosIniciais,
      HandleSubmit = _ref.HandleSubmit,
      path = _ref.path;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(core.Grid, {
    container: true,
    spacing: 3
  }, React__default.createElement(core.Grid, {
    item: true,
    lg: 6,
    md: 8,
    xs: 12
  }, React__default.createElement(core.Paper, null, React__default.createElement(core.Box, {
    p: 3
  }, React__default.createElement("form", {
    autoComplete: "new-password",
    onSubmit: HandleSubmit
  }, campos.map(function (campo, i) {
    var name = campo.name,
        label = campo.label,
        type = campo.type,
        required = campo.required,
        options = campo.options;
    var input = '';

    if (type === 'text') {
      input = React__default.createElement(core.TextField, {
        id: name,
        required: required,
        label: label,
        type: "text",
        variant: "outlined",
        fullWidth: true,
        value: dados ? dados[name] : '',
        onChange: function onChange(event) {
          var value = event.target.value;
          setDados(_objectSpread2({}, dados, _defineProperty({}, name, value)));
        }
      });
    }

    if (type === 'email') {
      input = React__default.createElement(core.TextField, {
        id: name,
        required: required,
        label: label,
        type: "email",
        variant: "outlined",
        fullWidth: true,
        value: dados ? dados[name] : '',
        onChange: function onChange(event) {
          var value = event.target.value;
          setDados(_objectSpread2({}, dados, _defineProperty({}, name, value)));
        }
      });
    }

    if (type === 'password') {
      input = React__default.createElement(core.TextField, {
        id: name,
        required: required,
        label: label,
        type: "password",
        variant: "outlined",
        fullWidth: true,
        value: dados ? dados[name] : '',
        onChange: function onChange(event) {
          var value = event.target.value;
          setDados(_objectSpread2({}, dados, _defineProperty({}, name, value)));
        }
      });
    }

    if (type === 'switch') {
      input = React__default.createElement(core.FormControlLabel, {
        control: React__default.createElement(core.Switch, {
          checked: dados[name] ? true : false,
          onChange: function onChange(event) {
            var checked = event.target.checked;
            setDados(_objectSpread2({}, dados, _defineProperty({}, name, checked)));
          }
        }),
        label: label
      });
    }

    if (type === 'checkbox') {
      var _dados = dados;
      input = React__default.createElement(React__default.Fragment, null, React__default.createElement(core.FormControl, null, React__default.createElement(core.FormLabel, null, label), React__default.createElement(core.FormGroup, null, Array.isArray(options) && options.map(function (option, i) {
        var value = option.value,
            text = option.text;
        return React__default.createElement(core.FormControlLabel, {
          key: i,
          control: React__default.createElement(core.Checkbox, {
            checked: _dados[name][value],
            value: value,
            name: name,
            onChange: function onChange(event) {
              var checked = event.target.checked;
              setDados(_objectSpread2({}, dados, _defineProperty({}, name, _objectSpread2({}, dados[name], _defineProperty({}, value, checked)))));
            }
          }),
          label: text
        });
      }))));
    }

    return React__default.createElement(core.Box, {
      key: i,
      mb: 2
    }, input);
  }), React__default.createElement(core.Button, {
    size: "large",
    color: "primary",
    variant: "contained",
    type: "submit",
    startIcon: React__default.createElement(icons.Save, null),
    disabled: JSON.stringify(dados) === JSON.stringify(dadosIniciais)
  }, "Salvar"), React__default.createElement(core.Box, {
    ml: 1,
    component: "span"
  }), React__default.createElement(core.Button, {
    size: "large",
    color: "default",
    variant: "text",
    href: path,
    startIcon: React__default.createElement(icons.Cancel, null)
  }, "Cancelar")))))));
}

var useStyles$2 = styles.makeStyles(function (theme) {
  return {
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff'
    }
  };
});
function SimpleBackdrop() {
  var classes = useStyles$2();
  return React__default.createElement(Backdrop, {
    className: classes.backdrop,
    open: true
  }, React__default.createElement(CircularProgress, {
    color: "inherit"
  }));
}

function TabelaContainer(_ref) {
  var colunas = _ref.colunas,
      children = _ref.children;
  return React__default.createElement(TableContainer, {
    component: Paper
  }, React__default.createElement(Table, null, colunas && React__default.createElement(TableHead, null, React__default.createElement(TableRow, null, colunas.map(function (coluna, i) {
    var titulo = coluna.titulo;

    if (titulo) {
      return React__default.createElement(TableCell, {
        key: i
      }, titulo);
    } else {
      return React__default.createElement(TableCell, {
        key: i
      }, coluna);
    }
  }))), React__default.createElement(TableBody, null, children)));
}

var useStyles$3 = styles.makeStyles({
  link: {
    display: 'block'
  }
});
function TabelaSimples(_ref) {
  var registros = _ref.registros,
      colunas = _ref.colunas,
      link = _ref.link,
      sufixo = _ref.sufixo,
      target = _ref.target;
  var classes = useStyles$3();
  return React__default.createElement(React__default.Fragment, null, registros && React__default.createElement(TabelaContainer, {
    colunas: colunas
  }, registros.length === 0 ? React__default.createElement(TableRow, null, React__default.createElement(TableCell, {
    colSpan: colunas.length
  }, "Nenhum registro encontrado")) : registros.map(function (registro, i) {
    return React__default.createElement(TableRow, {
      key: i
    }, colunas.map(function (coluna, j) {
      var parametro = coluna.parametro,
          idLink = coluna.idLink;
      return React__default.createElement(TableCell, {
        key: j
      }, link && idLink && React__default.createElement(Link, {
        className: classes.link,
        href: link + '/' + registro[idLink] + sufixo,
        target: target,
        rel: "noopener"
      }, registro[parametro]), !link && registro[parametro]);
    }));
  })));
}

exports.Alerta = Alerta;
exports.BarraContexto = BarraContexto;
exports.Formulario = Formulario;
exports.PreLoader = SimpleBackdrop;
exports.TabelaContainer = TabelaContainer;
exports.TabelaSimples = TabelaSimples;
