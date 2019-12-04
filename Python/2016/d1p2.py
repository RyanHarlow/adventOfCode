input  = open("input.txt", "r")

input = input.read()

inputList = input.split(', ')

dir = 'n'

coor = [0, 0]

visited = set()

def check_rep(x, y):
    coorstr = str(x) + '.' + str(y)
    if coorstr in visited:
        print(coorstr)
        print(abs(coor[0]) + abs(coor[1]))
    visited.add(coorstr) 


for i in range(len(inputList)):
    turn = inputList[i][0]
    dist = int(inputList[i][1:])
    if turn == 'R':
        if dir == 'n':  
            dir = 'e'
            for x in range(dist):
                coor[1] += 1  
                check_rep(coor[0], coor[1])   
        elif dir == 'e':
            dir = 's'
            for x in range(dist):
                coor[0] -= 1  
                check_rep(coor[0], coor[1])
        elif dir == 's':
            dir = 'w'
            for x in range(dist):
                coor[1] -= 1  
                check_rep(coor[0], coor[1])
        elif dir == 'w':   
            dir = 'n'
            for x in range(dist):
                coor[0] += 1  
                check_rep(coor[0], coor[1])     
    elif turn == 'L':    
        if dir == 'n':
            dir = 'w'  
            for x in range(dist):
                coor[1] -= 1  
                check_rep(coor[0], coor[1])      
        elif dir == 'e':
            dir = 'n'
            for x in range(dist):
                coor[0] += 1  
                check_rep(coor[0], coor[1])
        elif dir == 's':
            dir = 'e'
            for x in range(dist):
                coor[1] += 1  
                check_rep(coor[0], coor[1])
        elif dir == 'w':
            dir = 's'
            for x in range(dist):
                coor[0] -= 1  
                check_rep(coor[0], coor[1])
    
