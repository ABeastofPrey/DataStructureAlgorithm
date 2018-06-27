// #include <linear_list.h>
#include <iostream>
#include <ostream>
#include <exception>

using namespace std;

template <class T>
class LinearList
{
  private:
    int length;
    int maxSize;
    T *element; // 一维动态数组

  public:
    LinearList(int maxListSize = 10);
    ~LinearList() { delete[] element; }
    int Length() const { return length; } // 返回第k个元素到x中
    int Search(const T &x) const;
    bool IsEmpty() { return length == 0; }
    bool Find(int k, T &x) const;             // 返回x所在的位置
    LinearList<T> &Delete(int k, T &x);       // 删除第k个元素并将它返回至x中
    LinearList<T> &Insert(int k, const T &x); // 在第k个元素之后插入x
    void Output(ostream &out) const;
};


template <class T>
LinearList<T>::LinearList(int maxListSize)
{
    maxSize = maxListSize;
    element = new T[maxSize];
    length = 0;
};

template <class T>
bool LinearList<T>::Find(int k, T &x) const
{
    if (k < 1 || k > length) { return false; }
    x = element[k - 1];
    return true;
};

template <class T>
int LinearList<T>::Search(const T &x) const
{
    for (int i = 0; i < length; i++)
    {
        if (element[i] == x) { return ++i; }
        return 0;
    }
};

template <class T>
LinearList<T> &LinearList<T>::Delete(int k, T &x)
{
    if (Find(k, x)) {
        for (int i = k; i < length; i++)
        {
            element[i - 1] = element[i];
        }
        length--;
        return *this;
    } else {
        throw "Out of bounds.";
    }
};

template <class T>
LinearList<T>& LinearList<T>::Insert(int k, const T &x)
{
    if (k < 0 || k > length) { throw "Out of bounds."; }
    if (k == length) { throw "Full of list."; }
    for (int i = length -1; i >= k; i--) {
        element[i + i] = element[i];
    }
    element[k] = x;
    length++;
    return *this;
}

template <class T>
void LinearList<T>::Output(ostream& out) const
{
    for (int i = 0; i < length; i++) 
    {
        out << element[i] << " ";
    }
}

// 重载 <<
template <class T>
ostream& operator<<(ostream& out, const LinearList<T>& x)
{
    x.Output(out);
    return out;
}

int main() {
    try {
        LinearList<int> L(5);
        cout << "Length: " << L.Length() << endl;
        cout << "Is empty: " << L.IsEmpty() << endl;
        L.Insert(0, 2).Insert(1, 6);
        cout << "List is: " << L << endl;
        cout << "Is empty: " << L.IsEmpty() << endl;
        int z;
        L.Find(1, z);
        cout << "First elementis: " << z << endl;
        cout << "Length is: " << L.Length() << endl;
        L.Delete(1, z);
        cout << "Delete element is: " << z << endl;
        cout << "List is: " << z << endl;
    } catch(...) {
        cerr << "An exception has occurred.";
    }
}