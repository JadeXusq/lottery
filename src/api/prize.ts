import http from "@/utils/http";
import type { IPrizeResponse, IRankList } from "@/types/prize";

// 获取用户信息
export function getPrizeNo(loading = false) {
  return http<IPrizeResponse>({
    url: "/prize/getPrizeNo",
    method: "GET",
    loading,
  });
}

// 获取中奖名单
export function getRankList(loading = false) {
  return http<IRankList>({
    url: "/prize/getRankList",
    method: "GET",
    loading,
  });
}

// 获取用户中奖列表
export function getUserPrizeList() {
  return http<IRankList>({
    url: "/prize/getUserPrizeList",
    method: "GET",
  });
}
