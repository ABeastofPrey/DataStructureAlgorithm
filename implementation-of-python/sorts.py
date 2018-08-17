def insert_sort(lst):
    for i in range(1, len(lst)):
        x = lst[i]
        j = i
        while j > 0 and lst[j - 1] > x:
            lst[j] = lst[j - 1]
            j -= 1
        lst[j] = x
    return lst

def select_sort(list):
    for i in range(0, len(list) - 1):
        j = i
        for k in range(j, len(list)):
            if list[k] < list[j]:
                j = k
        if j != i:
            list[i], list[j] = list[j], list[i]
    return list

def bubble_sort(list):
    for i in range(len(list)):
        needChange = False
        for j in range(1, len(list) - i):
            if list[j-1] > list[j]:
                list[j-1], list[j] = list[j], list[j-1]
                needChange = True
        if not needChange: break
    return list

def quick_sort(list):
    def inner_sort(list, l, r):
        if l >= r: return
        i = l
        for j in range(l+1, r+1):
            if list[j] < list[l]:
                i += 1
                list[i], list[j] = list[j], list[i]
        list[l], list[i] = list[i], list[l]
        inner_sort(list, l, i-1)
        inner_sort(list, i+1, r)
        return list
    return inner_sort(list, 0, len(list)-1)

if __name__ == '__main__':
    import random
    
    arr = [random.randint(0, 100) for _ in range(20)]
    print(arr)
    print(quick_sort(arr))