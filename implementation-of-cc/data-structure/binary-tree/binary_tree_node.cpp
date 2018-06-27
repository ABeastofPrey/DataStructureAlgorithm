#include <vector>
#include <iostream>

using namespace std;

#include "binary_tree_node.hpp"

template <class T>
void Visit(BinaryTreeNode<T> *t)
{
    cout << t->data << endl;
}

template <class T>
void PreOrder(BinaryTreeNode<T> *t)
{
    if (!t) return;
    Visit(t);
    PreOrder(t->LeftChild);
    PreOrder(t->RightChild);
}

template <class T>
void InOrder(BinaryTreeNode<T> *t)
{
    if (t)
    {
        InOrder(t->LeftChild);
        Visit(t);
        InOrder(t->RightChild);
    }
}

template <class T>
void PostOrder(BinaryTreeNode<T> *t)
{
    PostOrder(t->LeftChild);
    PostOrder(t->RightChild);
    Visit(t);
}

template <class T>
void LevelOrder(BinaryTreeNode<T> *t)
{
    
}

void print()
{
    cout << "Hi" << endl;
}