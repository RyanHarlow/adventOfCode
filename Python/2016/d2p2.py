input  = open("input.txt", "r")

input = input.read()

inputList = input.splitlines()

print(inputList)

coor = [0,2]

rows, cols = (5, 5) 
arr = [[0 for i in range(cols)] for j in range(rows)] 

arr[2][0] = 1

arr[1][1] = 2
arr[2][1] = 3
arr[3][1] = 4

arr[0][2] = 5
arr[1][2] = 6
arr[2][2] = 7
arr[3][2] = 8
arr[4][2] = 9

arr[1][3] = 'A'
arr[2][3] = 'B'
arr[3][3] = 'C'

arr[2][4] = 'D'

print(arr)

for i in inputList:
    for element in range(0, len(i)): 
        if(i[element] == 'R'):
            coor[0] = coor[0] + 1
            if(coor[0] == 5):
                coor[0] = coor[0] - 1
            elif(arr[coor[0]][coor[1]] == 0):
                coor[0] = coor[0] - 1
        elif(i[element] == 'L'):
            coor[0] = coor[0] - 1
            if(coor[0] == -1):
                coor[0] = coor[0] + 1
            elif(arr[coor[0]][coor[1]] == 0):
                coor[0] = coor[0] + 1        
        elif(i[element] == 'U'):
            coor[1] = coor[1] - 1
            if(coor[1] == -1):
                coor[1] = coor[1] + 1
            elif(arr[coor[0]][coor[1]] == 0):
                coor[1] = coor[1] + 1        
        elif(i[element] == 'D'):
            coor[1] = coor[1] + 1
            if(coor[1] == 5):
                coor[1] = coor[1] - 1
            elif(arr[coor[0]][coor[1]] == 0):
                coor[1] = coor[1] - 1
    print(arr[coor[0]][coor[1]])