#include <iostream>
#include <vector>
using namespace std;
class Solution
{
public:
    vector<int> plusOne(vector<int> &digits)
    {
        int tens = 0;
        cout << *digits.end() << endl;
        // for (int i = digits.size() - 1; i >= 0; i--)
        // {
        //     int plus_one = digits[i] + 1 + tens;
        //     int tens = plus_one / 10;
        //     int sigle = plus % 10;

        //     if (tens > 0)
        //     {
        //     }
        // }
        return digits;
    }
};

int main()
{
    cout << "hello world!" << endl;
    vector<int> test = {1, 0, 9};
    Solution *s = new Solution();
    s->plusOne(test);
    return 0;
}