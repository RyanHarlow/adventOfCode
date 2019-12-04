import math

input  = open("input.txt", "r")

input = input.read()

inputList = input.split('\n')

count = 0

for i in range(len(inputList)):
    inputList[i] = int(inputList[i])
    num = math.floor(inputList[i] / 3) - 2
    count = count + num

print(count)