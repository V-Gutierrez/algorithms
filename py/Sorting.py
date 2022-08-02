def merge(left: list, right: list):
    sorted_array = []
    left_index = 0
    right_index = 0

    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            sorted_array.append(left[left_index])
            left_index += 1
        else:
            sorted_array.append(right[right_index])
            right_index += 1

    while left_index < len(left):
        sorted_array.append(left[left_index])
        left_index += 1

    while right_index < len(right):
        sorted_array.append(right[right_index])
        right_index += 1

    return sorted_array


def merge_sort(array: list):
    if len(array) == 1:
        return array

    else:
        mid_array = len(array) // 2
        left_array = array[:mid_array]
        right_array = array[mid_array:]
        sorted_left_array = merge_sort(left_array)
        sorted_right_array = merge_sort(right_array)

        return merge(sorted_left_array, sorted_right_array)


print(merge_sort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]))
