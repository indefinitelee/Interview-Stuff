function findArrayQuadruplet(arr, s):
n = arr.length

# if there are fewer than 4 items in arr, by
# definition no quadruplet exists whose sum is s
if (n < 4):
return null

# sort arr in an ascending order
arr.sort()

for i from 0 to n - 4:
for j from i + 1 to n - 3:
# r stores the complementing sum
r = s - (arr[i] + arr[j])

# check for sum r in subarray arr[j+1…n-1]
low = j + 1, high = n - 1;

while (low < high):
if (arr[low] + arr[high] < r):
low++

else if (arr[low] + arr[high] > r):
high--

# quadruplet with given sum found
else:
return [arr[i], arr[j], arr[low], arr[high]]

return []
