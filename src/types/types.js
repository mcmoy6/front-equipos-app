

export const types = {

    uiOpenModalEquipos: '[ui] Open modal equipos',
    uiCloseModalEquipos: '[ui] Close modal equipos',

    uiOpenModalEquiposMainBit: '[ui] Open modal equipos mainbit',
    uiCloseModalEquiposMainBit: '[ui] Close modal equipos mainbit',

    uiOpenModalEditEquipos: '[ui] Open modal edit equipos',
    uiCloseModalEditEquipos: '[ui] Close modal edit equipos',

    uiOpenModalEmpleado: '[ui] Open modal empleado',
    uiCloseModalEmpleado: '[ui] Close modal empleado',

    uiOpenModalTicket: '[ui] Open modal ticket',
    uiCloseModalTicket: '[ui] Close modal ticket',

    uiOpenModalPrinter: '[ui] Open modal printer',
    uiCloseModalPrinter: '[ui] Close modal printer',
    uiOpenModalPrinterEdit: '[ui] Open modal printer edit',
    uiCloseModalPrinterEdit: '[ui] Close moda printer edit',

    uiOpenModalUps: '[ui] Open modal ups',
    uiCloseModalUps: '[ui] Close modal ups',

    uiOpenModalMonitor: '[ui] Open modal monitor',
    uiCloseModalMonitor: '[ui] Close modal monitor',

    uiOpenModalCuenta: '[ui] Open modal cuenta',
    uiCloseModalCuenta: '[ui] Close modal cuenta',

    uiOpenModalImagenologia: '[ui] Open modal imagenologia',
    uiCloseModalImagenologia: '[ui] Close modal imagenologia',

    uiOpenModalTelecomunicacion: '[ui] Open modal telecomunicacion',
    uiCLoseModalTelecomunicacion:'[ui] Close modal telecomunicaicon',

    uiMovilOpenMenu: '[ui] Toggle movil open',
    
    authCheckingFinish: '[auth] Finish checking login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start register',
    authStartTokenRenew: '[auth] Start token renew',
    authLogout: '[auth] Logout',

    equipoSetActive: '[equipos] Equipo set active',
    equipoClearSetActive: '[equipos] Equipo clear set active',
    equipoSetActiveTemp: '[equipos] Equipo set ative temporal',
    equipoClearSetActiveTemp: '[equipos] Equipo clear set active temporal',
    equipoSetTargetActive: '[equipos] Equipo set target active',
    equipoClearTargetActive: '[equipos] Equipo clear target active',
    equiposAddNew: '[equipos] Add new',
    equiposGetLoaded: '[equipos] Equipos get loaded',
    equiposRowUpdated: '[equipos] Equipos row updated',
    equipoRowDeleted: '[equipos] Equipo row deleted',

    equiposClearRowSelected: '[equipos] Clear selected rows',
    equiposNoClearRowSelected: '[equipos] No Clear selected rows',

    equiposGoBackEquipos: '[equipos] Equipos go back',
    equiposNoGoBackEquipos: '[Equipos] Equipos no go back',

    equiposMainBitGetLoaded: '[equiposMainBit] Equipos Mainbit Get Loaded',
    equipoMainBitSetActive: '[equiposMainBit] Equipos Mainbit set active',
    equipoClearMainBitSetActive: '[equiposMainBit] Equipos Mainbit clear set active',
    equiposMainBitAddNew: '[equiposMainBit] Equipos MainBit add new',
    equiposMainBitRowUpdated: '[equiposMainBit] Equipos MainBit row update',
    equiposMainBitValidaForm: '[equiposMainBit] Equipos MainBit valida form',
    equiposMainBitOnFocus: '[equiposMainBit] Equipos MainBit on Focus',

    cuentasGetLoaded: '[cuentas] Cuentas get loaded',
    cuentasAddNew: '[cuentas] Cuentas add new',
    cuentasFlagCloseModal: '[cuentas] Cuentas flag to close modal',
    cuentasResetForm: '[cuentas] Cuentas reset form',
    cuentasValidaForm: '[cuentas] Cuantas validar formulario',
    cuentasClearValidaForm: '[cuentas] Cuentas Clear valida formulario',

    carritoAddItem: '[carrito] Carrito add item',

    empleadoSetActive: '[empleados] Empleado set active',
    empleadoClearSetActie: '[empleados] Empleado clear set active',
    empleadoSetActiveEdit: '[empleados] Empleado set active edit',
    empleadoClearActiveEdit: '[empleados] Empleado clear active edit',
    empleadoCustOption: '[empleados] Empleado custom option',
    empleadoClearCustOption: '[empleados] Empleado clear custom option',
    empleadosGetLoaded: '[empleados] Empleados get loaded',
    empleadosClearLoaded: '[empleados] Empleados clear loaded',
    empleadoAddNew: '[empleados] Empleado add new',
    empleadoSetTargetActive: '[empleados] Empleado set target active',
    empleadoClearTargetActive: '[empleados] Empleado clear target active',

    empleadoOpenModalEdit: '[empleados] Empleado open modal edit',
    empeladoClearOpenModalEdit: '[empleados] Empleado clear open modal edit',

    sitiosGetLoaded: '[sitios] Sitios get loaded',
    sitiosClearLoaded: '[sitios] Sitios clear loaded',
    sitioSetTargetActive: '[sitios] Sitios set target active',
    sitioClearTargetActive: '[sitios] Sitios clear target active',

    ticketsGetLoaded: '[tickets] Tickets get loaded',
    ticketSingleGetLoaded: '[ticket] Ticket single',
    ticketSetActive: '[tickets] Ticket set active',
    ticketClearActive: '[tickets] Ticket clear active',
    ticketsAddNew: '[tickets] Ticket add new',
    ticketChangeStatus: '[tickets] Ticket change status',
    ticketToHighlight: '[tickets] Ticket to resaltar',

    printersGetLoaded: '[printers] Printers get loaded',
    printerAddNew: '[printers] Printers add new',
    printerSetActive: '[printers] Printer set active',
    printerClearActive: '[printers] Printer clear active',
    printerRowUpdated: '[printers] Printer Row updated',
    printerValidaForm: '[printers] Printers validar formulario',
    printerClearValidaForm: '[printers] Printers Clear valida formulario',

    inventariosGetLoaded: '[inventarios] Inventarios get loaded',
    inventariosClearLoaded: '[inventarios] Inventarios clear loaded',

    imagenologiasGetLoaded: '[imagenologia] Imagenologia get loaded',
    imagenologiasAddNew: '[imagenologia] Imagenologia add new',
    imagenologiasValidaForm: '[imagenologia] Imagenologias validar formulario',
    imagenologiasClearValidaForm: '[imagenologia] Imagenologias Clear valida formulario',

    telecomGetLoaded: '[telecomunicaciones] Telecomunicaciones get loaded',
    telecomAddNew: '[telecomunicaciones] Telecomunicaciones add new',
    telecomunicacionesValidaForm: '[telecomunicaciones] Telecomunicaciones valida form',
    telecomunicacionesClearValidaForm: '[telecomunicaciones] Telecomunicaciones clear valida form',

    reguladoresAddNew: '[reguladores] Reguladores Add new',
    reguladorCustOption: '[reguladores] Regulador custom option',
    reguladorClearCustOption: '[reguladores] Regulador clear cust option',

    loadingActivate: '[loading] Loading active',
    loadingDeactivate: '[loading] Loading deactivate'
}