
template <class T>
class BinaryTreeNode
{
  private:
    T data;
    BinaryTreeNode<T> *LeftChild, *RightChild;

  public:
    BinaryTreeNode()
    {
        LeftChild = RightChild = 0;
    }
    BinaryTreeNode(const T &ele)
    {
        data = ele;
        LeftChild = RightChild = 0;
    }
    BinaryTreeNode(const T &ele, BinaryTreeNode<T> *l, BinaryTreeNode<T> *r)
    {
        data = ele;
        LeftChild = l;
        RightChild = r;
    }
    friend void Visit(BinaryTreeNode<T> *);
    friend void PreOrder(BinaryTreeNode<T> *);
    friend void InOrder(BinaryTreeNode<T> *);
    friend void PostOrder(BinaryTreeNode<T> *);
    friend void LevelOrder(BinaryTreeNode<T> *);
    // friend int main(void);
};

void print();