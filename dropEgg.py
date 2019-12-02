
# 当前拥有的鸡蛋数K 需要测试的楼层数N
def superEggDrop(K, N):

    memo = dict()

    def dp(K, N):
        # base case
        if K == 1:
            return N
        if N == 0:
            return 0

        if (K, N) in memo:
            return memo[(K, N)]

        res = float('INF')

        for i in range(1, N + 1):
            res = min(res,
                      max(
                          dp(K, N - i), # 碎
                          dp(K - 1, i - 1)  # 没碎
                      ) + 1 # 在第 i 楼扔了一次
                      )

        memo[(K, N)] = res
        return res

    return dp(K, N)


print(superEggDrop(2, 100))
