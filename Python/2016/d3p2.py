input  = open("input.txt", "r")

input = input.read()

inputList = list(map(int, input.split()))

print(inputList)

i = 0

count = 0

while(i < len(inputList) - 6):
    maxNum = max(inputList[i], inputList[i+3], inputList[i+6])
    if(maxNum == inputList[i]):
        second = inputList[i+3]
        third = inputList[i+6]
    elif(maxNum == inputList[i+3]):
        second = inputList[i+6]
        third = inputList[i]
    elif(maxNum == inputList[i+6]):
        second = inputList[i+3]
        third = inputList[i]
    if(second + third > maxNum):
        count = count + 1
    if(((i + 1) % 3) == 0):
        i = i + 7
    else:
        i = i + 1

print(count)