class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_tuples = [(x, ind) for ind, x in enumerate(nums)]
        num_tuples.sort(key=order_by_first)

        i: int = 0
        j: int = len(num_tuples)-1
            
        while i<j:
            a: tuple = num_tuples[i]
            b: tuple = num_tuples[j]
            addition: int = a[0] + b[0]
                
            if addition == target:
                return [a[1], b[1]]
            
            if addition < target:
                i+=1
            else:
                j-=1
    
def order_by_first(el: tuple):
    return el[0]

        