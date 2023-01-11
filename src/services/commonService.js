import client from "./serviceClient";
import { getCustomers, login, register } from "./apiEndPoints";

const fetchUsers = (params) => client.get(getCustomers, { ...params });
const fetchUserDetails = (userId, ...params) => client.get(`${getCustomers}/${userId}`, { ...params });

const login2 = (...params) => client.post(login, { data: [...params] });
const register2 = (...params) => client.post(register, { data: [...params] });

//---------------------------------------------------------------
export default {
  fetchUsers,
  fetchUserDetails,
  login2,
  register2
};
