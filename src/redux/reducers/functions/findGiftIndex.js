// Use binary search on the array to find the index of the gift
export default (arr, gift_id)=>{
    // convert gift_id from string to integer if it is a string
    if ( typeof gift_id === 'string' ) gift_id = parseInt(gift_id);
    // set pointers for the ends of where we are looking and get the middle of those pointers
    let start = 0;
    let end = arr.length-1
    let curr_index = Math.round((end-start)/2);

    if (arr[start].id === gift_id) return start
    if (arr[end].id === gift_id) return end 

    // check to see if gift at index is gift we are looking for
    // if it is not, move the pointer and keep looking until we find it
    while(arr[curr_index].id !== gift_id){
        // Console logs for testing
        // console.log(`start:${arr[start].id}, index: ${start}`);
        // console.log(`middle:${arr[curr_index].id}, index: ${curr_index}`);
        // console.log(`end:${arr[end].id}, index: ${end}`);
        // if the wanted gift id is smaller then the gift id at current index: make end pointer current index
        if(gift_id <= arr[curr_index].id) end = curr_index;
        // otherwise: make start pointer current index
        else start = curr_index;
        // update current index with updated pointers
        curr_index = start + Math.round((end-start)/2);
    }

    //once the while loop ends, we should have found the index of the wanted gift and will return it. 
    return curr_index

}