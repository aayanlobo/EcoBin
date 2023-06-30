#include <bits/stdc++.h>
using namespace std;
int minimumOperations(string& nodes) {
    int operations = 0;
    vector<int> nodeCounts(26, 0);
    for (char node : nodes) {
        nodeCounts[node - 'a']++;
    }
    for (int count : nodeCounts) {
        if (count > 0) {
            operations++;
        }
    }
    return operations;
}
int main() {
    std::string nodes = "abcddcba";
    int minOperations = minimumOperations(nodes);
    std::cout << "Minimum number of operations: " << minOperations << std::endl;

    return 0;
}