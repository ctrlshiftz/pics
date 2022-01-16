import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID dnmM4Y4M1iLkrGOzn4sIh8PXjWzHgdhCU3DZyeZ5G9k'
	}
});
