import {useState, useEffect} from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button  } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import {editUser, getUser} from "../service/api.jsx";

const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
& > div {
    margin-top: 20px;
}

`;

const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: ""
}

const EditUsers = () => {

    const [user, setUser] = useState(defaultValue)

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect( () => {
     loadUserDetails();
    },)

    const loadUserDetails = async () => {
        const responses = await getUser(id)
        setUser(responses.data)
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(user);
    }

    const editUserDetails = async() => {
       try {
        await editUser(user, id)
        navigate("/all")
       } catch (error) {
        console.error("Error editing user:", error);
       }
    }


    return (
        <>
          <Container injectFirst>
            <Typography variant="h4"> Edit User </Typography>
            <FormControl>
                <InputLabel htmlFor="my-input" >Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" >Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => editUserDetails()} >Edit User</Button>
            </FormControl>
          </Container>
        </>
    )
}

export default EditUsers;