export default ( firstname, lastname ) =>{
    // convert last name to all lowercase
    const lowerLast = lastname.toLowerCase();
    // uppercase the first letter in the name
    const upperLast = lowerLast.charAt(0).toUpperCase() + lowerLast.slice(1);

    // convert first name to all lowercase
    const lowerFirst = firstname.toLowerCase();
    // uppercase the first letter in the name
    const upperFirst= lowerFirst.charAt(0).toUpperCase() + lowerFirst.slice(1);

    // return them in an object
    return { firstname: upperFirst, lastname: upperLast };
}