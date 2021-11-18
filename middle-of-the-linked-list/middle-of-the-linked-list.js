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
// var middleNode = function(head) {
//   //need the length of the list 
//   //once the length is determined, need to figure out the middle 
//   //once the middle is determined, we return the rest of the list?
//     let end = head;
//     let slow = head;
//     while(end.next) {
//       end = end.next;
//      if (end.next !== null) {
//        end = end.next;
//        slow = slow.next
//      } else {
//        break
//      }
      
//     }
//   return slow;
// };

var middleNode = function(head) {
    let slow = head, fast = head;
    while (fast !== null) {
        fast = fast.next;
        if (fast == null) break;
        else fast = fast.next;
        
        slow = slow.next;
    }
    return slow;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};