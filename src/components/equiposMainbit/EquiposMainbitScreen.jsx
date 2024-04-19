import { useState, useEffect, useRef } from "react";
import LoadingBar from 'react-top-loading-bar';
import DataTable from 'react-data-table-component';
import { ToastContainer  } from 'react-toastify';
import DataTableExtensions from 'react-data-table-component-extensions';
import { BootstrapCardDataTable } from "../../loaders/BootstrapCardDataTable"
import { useDispatch, useSelector } from "react-redux";

// import { Html5QrcodePlugin } from './Html5QrcodePlugin'
// import { ResultContainerPlugin } from './ResultContainerPlugin';


import { equipoMainBitClearSetActiveAction, equipoMainBitSetActiveAction, equiposMainBitStartLoadingAction } from "../../actions/equiposMainBitActions";
import { useScreenSize } from "../../hooks/useScreenSize";
import { EquiposMainBitAddNewBtn } from "../ui/ui-equiposmainbit/EquiposMainBitAddNewBtn";
import { EquiposMainBitModalNew } from "./EquiposMainBitModalNew";


const columns = [
  
    {
      name: 'Área / Ub',
      selector: row => row.area,
      sortable: true,
    },
    {
        name: 'S/Cpu',
        selector: row => row.serieCpu,
        sortable: true,
    },
    {
        name: 'S/Monitor',
        selector: row => row.serieMonitor,
        sortable: true,
    },
    {
        name: 'S/ NoBreak',
        selector: row => row.serieNobreak,
        sortable: true,
    },
    {
      name: 'Nombre',
      selector: row => row.nombreUsuario,
      sortable: true,
    },
    {
      name: 'Apellidos',
      selector: row => row.apellidos,
      sortable: true,
    },
    {
      name: 'Fuap',
      selector: row => row.fuap,
      sortable: true,
    }
  ];
  

export const EquiposMainbitScreen = () => {

    const { width } = useScreenSize();

    const dispatch = useDispatch();

    const { data } = useSelector( state => state.equiposMainBit );

  const [ mostrarCardTable, setMostrarCardTable ] = useState(true);

  useEffect( () => {
    // setShow(true);
    
    setTimeout(() => {
        // setShow(false);
        setMostrarCardTable(false);
    }, 1000);

  }, []);

  // BARRA LOADING
  const ref = useRef(null);
  const barLoading = () => ref.current.complete();

  useEffect( () => {
    barLoading();
  }, []);


  useEffect( () => {
    dispatch( equiposMainBitStartLoadingAction() );
  }, [dispatch]);

  const handleRowSelected = ({selectedRows}) => {
    const [elementos] = selectedRows;

    if (elementos) {

        dispatch(equipoMainBitSetActiveAction(elementos));
  
      } else {
  
        dispatch( equipoMainBitClearSetActiveAction() );
  
      }
  }

  // const [decodedResults, setDecodedResults] = useState([]);
  //   const onNewScanResult = (decodedText, decodedResult) => {
  //       console.log("App [result]", decodedResult);
  //       setDecodedResults(prev => [...prev, decodedResult]);
  //   };


  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  const customStyles = {
   
    headCells: {
        style: {
            color: '#202124',
            fontSize: '14px',
        },
    },
    rows: {
        highlightOnHoverStyle: {
            backgroundColor: 'rgb(230, 244, 244)',
            borderBottomColor: '#FFFFFF',
            borderRadius: '10px',
            outline: '1px solid #FFFFFF',
        },
    },
    pagination: {
        style: {
            border: 'none',
        },
    },
};

const conditionalRowStyles = [
    {
      when: row => row.toggleSelected,
      style: {
        backgroundColor: 'rgba(63, 195, 128, 0.9)',
        userSelect: "none"
      }
    }
  ];

const tableData = {
    columns,
    data
  }

  return (
    <>

        <LoadingBar 
            color="#f11946" 
            height={3}
            ref={ref} 
            shadow={true} 
            loaderSpeed={700}
        />

        <ToastContainer
          enableMultiContainer
          containerId={"anId"}
        />

        {

            mostrarCardTable

            ?
            
            <BootstrapCardDataTable />

            :

            <div>

            {/* <section className="App-section">
                <div className="App-section-title"> Html5-qrcode React demo</div>
               
                <Html5QrcodePlugin
                    fps={10}
                    qrbox={250}
                    disableFlip={false}
                    qrCodeSuccessCallback={onNewScanResult}
                />
                <ResultContainerPlugin results={decodedResults} />
                
            </section> */}
                <DataTableExtensions
                    {...tableData}
                    export={false}
                    print={false}
                >
                <DataTable
                    title="Equipos de Cómputo"
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                    conditionalRowStyles={conditionalRowStyles}
                    customStyles={customStyles}
                    fixedHeader={true}
                    fixedHeaderScrollHeight={`${width <= 767 && '450px'}`}
                    selectableRows
                    selectableRowsHighlight={true}
                    selectableRowsSingle
                    // onRowClicked={ onRowClicked }
                    onSelectedRowsChange={handleRowSelected}
                    // clearSelectedRows={ rowClearSelected }
                    highlightOnHover
                    pagination    
                />

                </DataTableExtensions>
            </div>
        }

        <EquiposMainBitAddNewBtn />
        <EquiposMainBitModalNew />
        
    </>
  )
}
