input  = open("input.txt", "r")

input = input.read()

inputList = list(map(int, input.split()))

print(inputList)

i = 0

count = 0

while(i < len(inputList)):
    maxNum = max(inputList[i], inputList[i+1], inputList[i+2])
    if(maxNum == inputList[i]):
        second = inputList[i+1]
        third = inputList[i+2]
    elif(maxNum == inputList[i+1]):
        second = inputList[i+2]
        third = inputList[i]
    elif(maxNum == inputList[i+2]):
        second = inputList[i+1]
        third = inputList[i]
    if(second + third > maxNum):
        count = count + 1
    i = i + 3

print(count)