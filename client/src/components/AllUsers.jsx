import {useEffect, useState} from "react";
import { Table, TableHead, TableRow, TableCell, styled, Button } from "@mui/material"
import {getUsers, deleteUser} from "../service/api.jsx";
import { Link } from "react-router-dom";
// import { log } from "console";

const StyledTable = styled(Table)`
width: 90%;
margin: 50px auto 0 auto ;
`;

const StyledTableHead = styled(TableHead)`
background: #000;
`;

const StyledTableCell = styled(TableCell)`
color: #fff;
`;

const AllUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
       const response = await getUsers();
       setUsers(response.data)
    }

    const deleteUserDetails = async (id) => {
        await deleteUser(id)
        getAllUsers()
    }


    return (
        <>
        <StyledTable>
            <StyledTableHead>
                <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Username</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>Phone</StyledTableCell>
                    <TableCell></TableCell>
                </TableRow>
            </StyledTableHead>
        
            {
                users.map(user => (
                    <TableRow key={user._id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                        
                            <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user._id}`}  >Edit</Button>
                            <Button variant="contained" color="secondary" onClick={ 
                                () => deleteUserDetails(user._id) 
                            }>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))
                
            }
        </StyledTable>
        </>
    )
}



export default AllUsers;