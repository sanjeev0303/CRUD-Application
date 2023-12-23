import axios from "axios";




const URL = "http://localhost:8000"


 const addUser = async (data) => {
    try {
      return await  axios.post(`${URL}/add`, data)
    } catch (error) {
        console.log("Error while calling add User Api", error);
    }
}


 const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("Error while calling getUsers API", error)
  }
}


const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`)
  } catch (error) {
    console.log("error while calling getUser api", error);
  }
}


const editUser = async ( user, id ) => {
  try {
    await axios.put(`${URL}/${id}`, user)
  } catch (error) {
    console.log("error while calling editUser", error)
  }
}

const deleteUser = async (id) => {
try {
  await axios.delete(`${URL}/${id}`)
} catch (error) {
  console.log("error while calling deleteUse api", error);
}
}


export { addUser, getUsers, getUser, editUser, deleteUser }