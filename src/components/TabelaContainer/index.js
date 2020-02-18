import React from 'react';

// Material UI
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function TabelaContainer({
    colunas,
    children
}) {

    return (
        <TableContainer component={Paper}>
            <Table>
                {colunas && (
                    <TableHead>
                        <TableRow>
                            {colunas.map((coluna, i) => {
                                const { titulo } = coluna;
                                if (titulo) {
                                    return <TableCell key={i}>{titulo}</TableCell>;
                                } else {
                                    return <TableCell key={i}>{coluna}</TableCell>;
                                }
                            })}
                        </TableRow>
                    </TableHead>
                )}
                <TableBody>{children}</TableBody>
            </Table>
        </TableContainer>
    );
}
