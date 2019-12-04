import math

input  = open("input.txt", "r")

input = input.read()

inputList = input.split(',')

for i in range(len(inputList)):
    inputList[i] = int(inputList[i])

noun = 12

verb = 2

def run(arr, noun, verb):
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

print(run(inputList, noun, verb))