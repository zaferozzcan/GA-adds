def sum_to(n):
    total = 0
    for i in range(0,n+1):
        total += i

    return total


    

# largets 
def largest(ls):
  largest = 0
  for num in ls:
    if num > largest:
      largest = num
  return largest      

# print(largest([10, 4, 2, 231, 91, 54]))


def occurences(s1, s2):
    count=0
    for i in s1:
        if i == s2:
            count +=1
    return count

# print(occurences('fleep floopee', 'e'))

def product(*args):
  product = 1
  for arg in args:
    product *= arg
  return product

print(product(1,2,3,4,5))

