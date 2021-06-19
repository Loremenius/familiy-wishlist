export default  function CreateBaseURL(){
    if (process.env.NODE_ENV === 'development') return 'http://localhost:4000';
    else return 'https://family-wishlist-db.herokuapp.com';
}