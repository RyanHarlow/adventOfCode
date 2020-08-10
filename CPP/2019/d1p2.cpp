#include <iostream>
#include <fstream>
#include <string>
#include <typeinfo>
#include <sstream>
#include <math.h>  

using namespace std;

int calcFuel(int weight) {
  int fuel = floor(weight/3) - 2;
  if(fuel > 8){
      fuel = fuel + calcFuel(fuel);
  }
  return fuel;
}

int main()
{
    int total;

    string line;
    ifstream myfile("input.txt");
    if (myfile.is_open())
    {
        while (getline(myfile, line))
        {
            stringstream geek(line);
            int x = 0;
            geek >> x;
            
            total = total + calcFuel(x);

        }
        myfile.close();
    }

    else
        cout << "Unable to open file";

    cout << total;

    return 0;
}


