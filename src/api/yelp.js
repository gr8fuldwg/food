import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer DKnsmBx5JTI0hs34Y8SQ8tn3f8QUkYZiGD5KhdzVe54So5b6l7xEtZ8DQphI1uD9eK2XFSXlilEfA-koBYKvB67J1pdfWrAaeFm4ovyFBb9tARedHiCAHRmivaiXXnYx'
    }
});
