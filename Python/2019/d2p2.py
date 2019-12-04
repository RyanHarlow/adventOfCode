import math

input  = open("input.txt", "r")

input = input.read()

inputList = input.split(',')

for i in range(len(inputList)):
    inputList[i] = int(inputList[i])

def run(arr1, noun, verb):
    arr = []
    for i in range(len(arr1)):
       arr.append(arr1[i])
    arr[1] = noun
    arr[2] = verb
    i = 0
    while(i < len(arr)):
        if(arr[i] == 1):
            arr[arr[i+3]] = arr[arr[i+1]] + arr[arr[i+2]]
        elif(arr[i] == 2):
            arr[arr[i+3]] = arr[arr[i+1]] * arr[arr[i+2]]
        elif(arr[i] == 99):
            return arr[0]
        i = i + 4

for i in range(100):
    for j in range(100):
        if(run(inputList, i, j) == 19690720):
            print(i * 100 + j)
    
