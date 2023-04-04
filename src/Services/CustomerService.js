import axios from 'axios'

const CUSTOMER_BASE_REST_API_URL_GET = "http://localhost:8080/api/v1/demo"
const CUSTOMER_BASE_REST_API_URL_POST = "http://localhost:8080/api/v1/customers/register"
const CUSTOMER_BASE_REST_API_URL_POST_AUTHENICATE= "http://localhost:8080/api/v1/customers/authenticate"
const CUSTOMER_BASE_REST_API_URL_GET_ACCOUNT_SUMMARY ="http://localhost:8080/api/v1/demo/getCustomer"

class CustomerService{
    getAllCustomers(){
        return axios.get(CUSTOMER_BASE_REST_API_URL_GET)
    }
    createEmployee(customer){
        return axios.post(CUSTOMER_BASE_REST_API_URL_POST,customer)
    }
    authenticateEmployee(customer){
        return axios.post(CUSTOMER_BASE_REST_API_URL_POST_AUTHENICATE,customer)
    }
    getAccountSummary(cusId){
        return axios.get(CUSTOMER_BASE_REST_API_URL_GET_ACCOUNT_SUMMARY+'/'+cusId);
    }
}

export default new CustomerService();