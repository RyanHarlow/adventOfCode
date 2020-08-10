#include <iostream>
#include <fstream>
#include <string>
#include <typeinfo>
#include <sstream>
#include <math.h>  

using namespace std;

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
            
            total = total + (floor(x/3) -2 );

        }
        myfile.close();
    }

    else
        cout << "Unable to open file";

    cout << total;

    return 0;
}