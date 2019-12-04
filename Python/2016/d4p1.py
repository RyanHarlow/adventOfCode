input  = open("input.txt", "r")

input = input.read()

inputList = list(map(str, input.split()))

for i in range(len(inputList)):
    inputList[i] = inputList[i].split('-')

print(inputList)