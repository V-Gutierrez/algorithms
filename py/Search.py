def linear_search(list: list, value) -> int:
    final_index = -1

    for index, item in enumerate(list):
        if(item == value):
            final_index = index

    return final_index


def binary_search(sorted_list: list, value) -> int:
    max_index = len(sorted_list) - 1
    min_index = 0

    while min_index <= max_index:
        guessed_index = (min_index + max_index) // 2

        if sorted_list[guessed_index] == value:
            return guessed_index
        else:
            if sorted_list[guessed_index] < value:
                min_index = guessed_index + 1
            else:
                max_index = guessed_index - 1
