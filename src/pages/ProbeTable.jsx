import React from "react";
import MaterialTable from 'material-table';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const ProbeTable = () => {
    return (
        <main className="flex">
            <h2>Table Probe</h2>
            <MaterialTable
                title="Basic Sorting Preview"
                columns={[
                    { title: 'Name', field: 'name' },
                    { title: 'Surname', field: 'surname' },
                    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                    {
                        title: 'Birth Place',
                        field: 'birthCity',
                        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                    },
                ]}
                data={[
                    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                ]}
                options={{
                    sorting: true
                }}
            />
        </main>
    );
};

export default ProbeTable;
