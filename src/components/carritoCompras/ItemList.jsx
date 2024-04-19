import { Item } from "./Item"




export const ItemList = ({ carritoItems = [] }) => {
  return (
    <ul className="list-group">
        {
            carritoItems.map( items => (
                <Item key={items.id} item={ items } />

            ))
        }
    </ul>
  )
}
