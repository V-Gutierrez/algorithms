cache = {}


def memo(fn, arg: int) -> int:
    if arg not in cache:
        cache[arg] = fn(arg)
    return cache[arg]


def fibonaci(n: int) -> int:
    if n == 0:
        return 0
    if n == 1:
        return 1
    else:
        return memo(fibonaci, n-1) + memo(fibonaci, n-2)


def factorial(x: int) -> int:
    if x == 0:
        return 1
    else:
        return x * memo(factorial, x-1)
