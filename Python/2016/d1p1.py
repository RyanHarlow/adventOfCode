input  = open("input.txt", "r")

input = input.read()

inputList = input.split(', ')

dir = 'n'

coor = [0, 0]

for i in range(len(inputList)):
    turn = inputList[i][0]
    dist = int(inputList[i][1:])
    if turn == 'R':
        if dir == 'n':  
            dir = 'e'
            coor[1] += dist      
        elif dir == 'e':
            dir = 's'
            coor[0] -= dist
        elif dir == 's':
            dir = 'w'
            coor[1] -= dist
        elif dir == 'w':   
            dir = 'n'
            coor[0] += dist     
    elif turn == 'L':    
        if dir == 'n':
            dir = 'w'
            coor[1] -= dist        
        elif dir == 'e':
            dir = 'n'
            coor[0] += dist
        elif dir == 's':
            dir = 'e'
            coor[1] += dist
        elif dir == 'w':
            dir = 's'
            coor[0] -= dist

print(abs(coor[0]) + abs(coor[1]))