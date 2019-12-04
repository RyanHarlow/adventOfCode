input  = open("input.txt", "r")

input = input.read()

inputList = input.splitlines()

print(inputList)

coor = [0,0]

for i in inputList:
    for element in range(0, len(i)): 
        if(i[element] == 'R'):
            if(coor[0] < 1):
                coor[0] = coor[0] + 1
        elif(i[element] == 'L'):
            if(coor[0] > -1):
                coor[0] = coor[0] - 1        
        elif(i[element] == 'U'):
            if(coor[1] > -1):
                coor[1] = coor[1] - 1
        elif(i[element] == 'D'):  
            if(coor[1] < 1):      
                coor[1] = coor[1] + 1
    if(coor[0] == -1 and coor[1] == -1):
        print(1)
    elif(coor[0] == 0 and coor[1] == -1):
        print(2)
    elif(coor[0] == 1 and coor[1] == -1):
        print(3)
    elif(coor[0] == -1 and coor[1] == 0):
        print(4)
    elif(coor[0] == 0 and coor[1] == 0):
        print(5)
    elif(coor[0] == 1 and coor[1] == 0):
        print(6)
    elif(coor[0] == -1 and coor[1] == 1):
        print(7)
    elif(coor[0] == 0 and coor[1] == 1):
        print(8)
    elif(coor[0] == 1 and coor[1] == 1):
        print(9)