import Table_Users from "../Table_Users"
import { Helmet } from 'react-helmet';

const Panel = () =>{
    return(
        <>
        <Helmet>
        <title>Lista Usuarios | UCC</title>
      </Helmet>
        <Table_Users/>
        </>
    )
}
export default Panel