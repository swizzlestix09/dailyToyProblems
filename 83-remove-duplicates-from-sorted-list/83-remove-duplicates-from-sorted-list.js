/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
I - a sorted linked list
O - a sorted linked list with unique values
C - return same linked list 
E - empty list? 
*/
var deleteDuplicates = function(head) {
    let currentVal = head

    while(currentVal) {
       if (currentVal.next !== null && currentVal.val === currentVal.next.val) {
           currentVal.next = currentVal.next.next
       } else {
          currentVal = currentVal.next 
       }
        
    }
    return head
};


//iterate through list 

//if current value is same as future value set current value to future value 
//continue iteration until complete, returning list. 

//let currentVal equal head.val 
//let nextVal equal head.next 
//while nextVal is not equal null 
//if currentVal.val and nextVal.val are equal 
//currentVal = nextVal 
//else currentVal = currentVal.next, and nextVal = nextVal.next
//return head ?
