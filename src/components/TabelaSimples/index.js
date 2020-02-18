import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';

// Componentes
import TabelaContainer from '../TabelaContainer';


// Estilos personalizados
const useStyles = makeStyles({
  link: {
    display: 'block',
  },
});

export default function TabelaSimples({
  registros,
  colunas,
  link,
  sufixo,
  target,
}) {
  const classes = useStyles();

  return (
    <>
      {registros &&
        <TabelaContainer colunas={colunas}>
          {registros.length === 0 ? (
            <TableRow>
              <TableCell colSpan={colunas.length}>Nenhum registro encontrado</TableCell>
            </TableRow>
          ) : (registros.map((registro, i) => (
            <TableRow key={i}>
              {colunas.map((coluna, j) => {
                const { parametro, idLink } = coluna;
                return (
                  <TableCell key={j}>
                    {link && idLink && (
                      <Link
                        className={classes.link}
                        href={link + '/' + registro[idLink] + sufixo}
                        target={target}
                        rel='noopener'>
                        {registro[parametro]}
                      </Link>
                    )}
                    {!link && registro[parametro]}
                  </TableCell>
                );
              })}
            </TableRow>
          )))}
        </TabelaContainer>
      }
    </>
  );
}
