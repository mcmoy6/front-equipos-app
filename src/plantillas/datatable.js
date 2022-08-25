import React, { useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import FeatherIcon from 'feather-icons-react';

const data = [{
        id: '001',
        equipo: 'MJ02NHM7',
        tipo_reporte: 'NoBreak',
        descripcion: 'No enciende',
        num_reporte: 'INC476043',
        num_rproveedor: 'INC122106',
        estado: 'ABIERTO'
    },{
        id: '002',
        equipo: 'MJ02NFQX',
        tipo_reporte: 'CPU',
        descripcion: 'No inicia windows',
        num_reporte: 'INC908765',
        num_rproveedor: 'INC3411900',
        estado: 'ABIERTO'
    }];


const columns = [
    {
        name: 'No. Reporte',
        selector: row => row.num_reporte,
        sortable: true,
    },
    {
        name: 'N/S. Equipo',
        selector: row => row.equipo,
        sortable: true,
    },
    {
        name: 'Tipo',
        selector: row => row.tipo_reporte,
        sortable: true,
    },
    {
        name: 'Descripción',
        selector: row => row.descripcion,
        sortable: true,
    }
    
];


export const TicketScreen = () => {

    const tableData = {
        columns,
        data
      }

    return (
        <div>
            <DataTableExtensions
                {...tableData}
                export={false}
                print={false}
            >
                <DataTable 
                    title="Tickets list" 
                    columns={columns} 
                    data={data} 
                    pagination
                />
            </DataTableExtensions>
        </div>
    );

}