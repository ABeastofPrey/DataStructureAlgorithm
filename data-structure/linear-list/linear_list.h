template <class T>
class LinearList
{
  private:
    int length;
    int maxSize;
    T *element; // 一维动态数组

  public:
    LinearList(int maxListSize);
    ~LinearList() { delete[] element; }
    int Length() const { return length; } // 返回第k个元素到x中
    int Search(const T &x) const;
    bool IsEmpty() { return length == 0; }
    bool Find(int k, T &x) const;             // 返回x所在的位置
    LinearList<T> &Delete(int k, T &x);       // 删除第k个元素并将它返回至x中
    LinearList<T> &Insert(int k, const T &x); // 在第k个元素之后插入x
    // void Output(iostream &out) const;
};
