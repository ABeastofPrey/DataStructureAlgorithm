import cProfile
import pprint

def fibonacii(n):
    if n <= 2: return 1
    return fibonacii(n-1) + fibonacii(n-2)

def tailfib(n, acc1, acc2):
    if n < 2:return acc1
    return tailfib(n-1,acc2,acc1 + acc2)

# cProfile.run('fibonacii(30)')
# cProfile.run('tailfib(993, 1, 1)')

def factorial(n):
    if n <= 1: return 1
    return n + factorial(n-1)

def tailfactorial(n, sum=1):
    if n <= 1: return sum
    return tailfactorial(n-1, n + sum)

# cProfile.run('tailfactorial(900)')
# cProfile.run('factorial(900)')


class BinTNode:
    def __init__(self, val, left=None, right=None):
        self.val, self.left, self.right = val, left, right

class BinTree:
    def __init__(self):
        self.root = None

    def insert(self, val):
        node = BinTNode(val)
        if self.root is None:
            self.root = node
            return
        current = self.root
        while current:
            if val < current.val:
                if current.left is None:
                    current.left = node
                    break
                current = current.left
            else:
                if current.right is None:
                    current.right = node
                    break
                current = current.right
    
    def delete(self, val):
        def inner_delete(node, val):
            if node is None: return None
            if node.val == val:
                # Has two childs
                if node.left is not None and node.right is not None:
                    smallestRight = self.min(node.right)
                    node.val = smallestRight.val
                    node.right = inner_delete(node.right, smallestRight.val)
                    return node
                # Has one child
                elif node.left is not None or node.right is not None:
                    return node.left if node.left is not None else node.right
                # Has no child
                else:
                    return None
            elif val < node.val:
                node.left = inner_delete(node.left, val)
                return node
            else:
                node.right = inner_delete(node.right, val)
                return node
        inner_delete(self.root, val)

    def pre_order(self):
        order_list = []
        def inner_order(node):
            if node is None: return
            order_list.append(node.val)
            inner_order(node.left)
            inner_order(node.right)
        inner_order(self.root)
        return order_list

    def in_order(self):
        order_list = []
        def inner_order(node):
            if node is None: return
            inner_order(node.left)
            order_list.append(node.val)
            inner_order(node.right)
        inner_order(self.root)
        return order_list

    def post_order(self):
        order_list = []
        def inner_order(node):
            if node is None: return
            inner_order(node.left)
            inner_order(node.right)
            order_list.append(node.val)
        inner_order(self.root)
        return order_list

    def level_order(self, root):
        res, level = [], [root]
        while root and level:
            res.append([node.val for node in level])
            level = [kid for node in level for kid in (node.left, node.right) if kid]
        return res

    def levelOrder(self, root):
        result = []
        def inner_sort(node, level, result):
            if node is None:
                return
            if len(result) <= level:
                result.append([])
            result[level].append(node.val)
            inner_sort(node.left, level+1, result)
            inner_sort(node.right, level+1, result)
        inner_sort(root, 0, result)
        return [item for arr in result for item in arr]

    def min(self, root):
        node = root
        while root and node.left:
            node = node.left if node.left is not None else node
        return node

    def max(self, root):
        node = root
        while root and node.right:
            node = node.right if node.right is not None else node
        return node

if __name__ == "__main__":
    arr = [24, 16, 45, 3, 22, 37, 99, 8, 4, 61, 45, 90, 12]
    binTree = BinTree()
    for item in arr:
        binTree.insert(item)
    # print(binTree.pre_order())
    # print(binTree.in_order())
    # print(binTree.post_order())
    # print(binTree.level_order(binTree.root))
    print(binTree.levelOrder(binTree.root))
    # print(binTree.min(binTree.root).val)
    # print(binTree.max(binTree.root).val)
    # binTree.delete(99)