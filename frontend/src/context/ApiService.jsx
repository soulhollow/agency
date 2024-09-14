import axios from 'axios';

class ApiService {
    constructor() {
        const token = localStorage.getItem('token');  // Hole den Token aus dem localStorage

        this.apiClient = axios.create({
            baseURL: 'https://localhost:8443/api', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ? `Bearer ${token}` : '',  // Setze den Header, wenn ein Token vorhanden ist
            },
        });
    }

    // Product APIs
    getAllProducts() {
        return this.apiClient.get('/products');
    }

    getProductById(id) {
        return this.apiClient.get(`/products/${id}`);
    }

    createProduct(product) {
        return this.apiClient.post('/products', product);
    }

    updateProduct(id, product) {
        return this.apiClient.put(`/products/${id}`, product);
    }

    deleteProduct(id) {
        return this.apiClient.delete(`/products/${id}`);
    }

    // Auth APIs
    login(loginRequest) {
        return this.apiClient.post('/auth/login', loginRequest);
    }

    register(userDTO) {
        return this.apiClient.post('/auth/register', userDTO);
    }

    // Order APIs
    getAllOrders() {
        return this.apiClient.get('/orders');
    }

    getOrderById(id) {
        return this.apiClient.get(`/orders/${id}`);
    }

    createOrder(orderDTO) {
        return this.apiClient.post('/orders', orderDTO);
    }

    updateOrder(id, orderDTO) {
        return this.apiClient.put(`/orders/${id}`, orderDTO);
    }

    deleteOrder(id) {
        return this.apiClient.delete(`/orders/${id}`);
    }
    // Contact APIs
    createContactMessage(contactRequest) {
        return this.apiClient.post('/contact/send', contactRequest);
    }

    // User API
    getCurrentUser() {
        console.log(localStorage.getItem('token')); // Debugging-Ausgabe
        return this.apiClient.get('/auth/me', localStorage.getItem('token')); // Der Authorization-Header ist im Konstruktor enthalten
    }

    // Order APIs
    getOrdersByUserId() {
        const userId = localStorage.getItem('userId'); // Beispielhaft, passe dies je nach deinem Auth-Flow an
        return this.apiClient.get(`/orders/user/${userId}`);
    }


    // Payment APIs
    /*processPayment(paymentRequest) {
        return this.apiClient.post('/payments', paymentRequest);
    }*/
}


const apiServiceInstance = new ApiService(); 
export default apiServiceInstance; 
