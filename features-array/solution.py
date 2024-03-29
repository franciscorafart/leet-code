from collections import OrderedDict
class Array(object):
    def __init__(self, arr = []):
        self.arr = arr
        self.unique_values = [] # memoization
    
    def num_elements(self):
        return len(self.arr)
    
    def _get_unique_values(self):
        unique_values = []
        for idx, el in enumerate(self.arr):
            if el not in self.arr[idx+1:len(self.arr)]:
                unique_values.append(el)
        self.unique_values = unique_values
        
        return unique_values

    def num_values(self):
        if self.unique_values:
            return len(self.unique_values)
        
        return len(self._get_unique_values())
    
    def start_end(self):
        return [self.arr[0], self.arr[-1]]
        
    def range_(self):
        if not self.unique_values:
            self._get_unique_values()
            
        return [min(self.unique_values), max(self.unique_values)]
    
    def _compare(self, a, b, order):
        if order == 'desc':
            return a > b
        
        return a < b
            
    def _get_sequence(self, order):
        sequence = []
        a = self.arr
        temp_sequence = [a[0]]
        
        for i in range(0, len(self.arr) - 1):
            if self._compare(a[i], a[i+1], order):
                temp_sequence.append(a[i+1])
                if len(temp_sequence) > len(sequence):
                    sequence = temp_sequence
            else: # reset
                temp_sequence = [a[i+1]]
        
        return sequence
        

    def largest_increas_subseq(self):
        s = self._get_sequence('asc')
        if len(s) >= 3:
            return s
        
        return "No increasing subsequence"
        
    def largest_decreas_subseq(self):
        s = self._get_sequence('desc')
        if len(s) >= 3:
            return s
        
        return "No decreasing subsequence"
        
    def __str__(self):
        d = OrderedDict([
             ('1.number of elements', self.num_elements()),
             ('2.number of different values', self.num_values()),
             ('3.first and last terms', self.start_end()),
             ('4.range of values', self.range_()),
             ('5.increas subseq', self.largest_increas_subseq()),
             ('6.decreas subseq', self.largest_decreas_subseq())
             ])
        return str(d)