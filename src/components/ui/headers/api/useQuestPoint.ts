import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchQueryPointByUserUuid, fetchQuestPoint } from "./quest-point.repository";

export type FetchPointProps = {
    options? :{
        from?: Date;
        to?: Date;
    }
}

/**
 * ユーザーの獲得クエストポイントを取得
 * @param options.from 取得開始日 Date
 * @param options.to 取得終了日 Date
 * @returns クエストポイント
 */
export function useQuestPoint({options = {}}: FetchPointProps) {
    const questPointQuery = useSuspenseQuery({
        queryKey: ["questPoint", options?.from, options?.to],
        queryFn: () => fetchQuestPoint({options}),
    });

    return {
        questPoint: questPointQuery.data
    }
}

/**
 * ユーザーの獲得クエストポイントをUuidで取得
 * @param options.from 取得開始日 Date
 * @param options.to 取得終了日 Date
 * @returns クエストポイント
 */
export function useQuestPointByUserUuid(uuid: string) {
    const questPointQuery = useSuspenseQuery({
        queryKey: ["questPoint", uuid],
        queryFn: () => fetchQueryPointByUserUuid(uuid),
    });

    return {
        questPoint: questPointQuery.data
    }
}
