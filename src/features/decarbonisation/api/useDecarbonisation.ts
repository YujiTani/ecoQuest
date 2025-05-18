import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchDecarbonisations } from "./decarbonisation.repository";

/**
 * decarbonisationの一覧を取得
 * @returns decarbonisations
 */
export function useDecarbonisations() {
    const decarbonisationsQuery = useSuspenseQuery({
        queryFn: fetchDecarbonisations,
        queryKey: ["decarbonisations"]
    })

    return {
        decarbonisations: decarbonisationsQuery.data
    }
}