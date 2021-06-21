export default  function CreateBaseURL(){
    if (process.env.REACT_APP_DATABASE_URL_TEST === true) return 'http://localhost:4000';
    else return 'https://family-wishlist-db.herokuapp.com';
}