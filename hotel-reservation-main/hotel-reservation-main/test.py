def binary_search(list, elm):
    n = (len(list) - 1) // 2
    print(n)
    tmp = list
    print(tmp)

    while n != 0:
        print(n)
        if tmp[n] == elm:
            return True
        elif elm < tmp[n]:
            tmp = tmp[0:n]
            n = len(tmp)-1 // 2
        else:
            tmp = tmp[(n + 1):len(list)]
            print(tmp)
            print(len(tmp)-1)
            n = len(tmp)-1 // 2
            print(n)

    return False


if __name__ == "__main__":
    listt = [2, 3, 4, 5, 15, 36, 45, 74, 95, 125, 340]

    print(binary_search(listt, 95))
