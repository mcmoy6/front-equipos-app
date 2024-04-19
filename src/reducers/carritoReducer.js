import { types } from '../types/types';

const initialState = {
    data: [
          {
            id: new Date().getTime(),
            codigo: "7501055302451",
            costo: 22.00,
            desc: "Coca Cola 1 L.",
          },
          {
            id: new Date().getTime() + 2,
            codigo: "7501086801046",
            costo: 12.50,
            desc: "AGUA E-PURA 1L"
          },
          {
            id: new Date().getTime() + 3,
            codigo: "088381082020",
            costo: 1299.80,
            desc: "LIJADORA ORBITAL MAKITA BO4556"
          },
          {
            id: new Date().getTime() + 4,
            codigo: "079567520054",
            costo: 56.90,
            desc: "WD-40 MULTIUSOS"
          },
          {
            id: new Date().getTime() + 5,
            codigo: "7908371613733",
            costo: 299.90,
            desc: "CREMA HUMECTANTE TODODÍA"
          }
          ,
          {
            id: new Date().getTime() + 1,
            codigo: "7501563324310",
            costo: 1.30,
            desc: "DEXTROMETORFANO JARABE 15 MG / 5 ML"
          },
          {
            id: new Date().getTime() + 1,
            codigo: "7501125177637",
            costo: 22.60,
            desc: "Electrolit pediatrico 300 ml"
          },
          {
            id: new Date().getTime() + 1,
            codigo: "7501011104099",
            costo: 25.00,
            desc: "Rufles queso 48 g."
          },
          {
            id: new Date().getTime() + 1,
            codigo: "7501011142299",
            costo: 17.00,
            desc: "Crujitos 48 g."
          },
          {
            id: new Date().getTime() + 1,
            codigo: "7501125116810",
            costo: 51.50,
            desc: "Agrifen Antigripal."
          },
          {
            id: new Date().getTime() + 1,
            codigo: "7501349021570",
            costo: 120.00,
            desc: "Amoxicilina 500 mg."
          },
          {
            id: new Date().getTime() + 1,
            codigo: "7501361682094",
            costo: 45.00,
            desc: "Paracetamol 500 mg"
          },
          {
            id: new Date().getTime() + 1,
            codigo: "7501299370018",
            costo: 37.90,
            desc: "Naproxeno 250 mg."
          },
          {
            id: new Date().getTime() + 1,
            codigo: "070612151292",
            costo: 37.90,
            desc: "ARMORALL BRILLO ORIGINAL 125 ML."
          },

    ],
    carritoItems: JSON.parse(localStorage.getItem('items')) || [],
   
}

export const carritoReducer = ( state = initialState, action ) => {
  
    switch (action.type) {

        case types.carritoAddItem:
            
            return {
                ...state,
                carritoItems: [
                    ...state.carritoItems,
                    action.payload
                ]
            }

        
    
        default:
            return state
    }

}
