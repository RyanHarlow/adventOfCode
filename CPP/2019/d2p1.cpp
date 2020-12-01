#include <fstream>
#include <iostream>
#include <string>
#include <stdio.h>
#include <algorithm>
#include <vector>
#include <sstream>

using namespace std;

int main () {
    string data;

    // open a file in read mode.
    ifstream infile; 
    infile.open("input.txt"); 
    // puts file data into string called data
    infile >> data; 

    std::replace(data.begin(), data.end(), ',', ' ');

    vector<int> array;

    stringstream ss(data);

    int temp;

    while (ss >> temp)
        array.push_back(temp);

    for(int i=0; i < array.size(); i++)
        std::cout << array.at(i) << ' ';

}