// Use binary search on the array to find the index of the gift
export default (arr, gift_id)=>{
    // set pointers for the ends of where we are looking and get the middle of those pointers
    let start = 0;
    let end = arr.length-1
    let curr_index = Math.round((end-start)/2);

    // check to see if gift at index is gift we are looking for
    // if it is not, move the pointer and keep looking until we find it
    while(arr[curr_index].id !== gift_id){
        // if the wanted gift id is smaller then the gift id at current index: make end pointer current index
        if(gift_id < arr[curr_index].id) end = curr_index;
        // otherwise: make start pointer current index
        else start = curr_index;
        // update current index with updated pointers
        curr_index = Math.round((end-start)/2);
    }

    //once the while loop ends, we should have found the index of the wanted gift and will return it. 
    return curr_index

}