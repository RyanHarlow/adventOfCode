import math

input  = open("input.txt", "r")

input = input.read()

inputList = input.split('\n')

count = 0

def findFuel(input):
    num = math.floor(input / 3) - 2
    if(num > 6):
        num = num + findFuel(num)
    return num

for i in range(len(inputList)):
    inputList[i] = int(inputList[i])
    count = count + findFuel(inputList[i])

print(count)