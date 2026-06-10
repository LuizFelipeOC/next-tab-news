'use client'

import {
    Pagination,
    PaginationContent,
    PaginationItem,

    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { CATEGORY_FILTER_OPTIONS } from "@/src/constants";
import { useRouter, useSearchParams } from "next/navigation";

export default function CustomPagination() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const page =
        searchParams.get("page") ?? '1'
    const selectedCategory =
        searchParams.get("category") ?? CATEGORY_FILTER_OPTIONS[0].value;
    
    const nextPage = () => {
        const newPage = Number.parseInt(page) + 1;

        router.push(
            `/tabnews?category=${selectedCategory}&page=${newPage}`
        )
    }

    const previousPage = () => {
        if (page !== '1') {
            const newPage = Number.parseInt(page) - 1;

            router.push(
                `/tabnews?category=${selectedCategory}&page=${newPage}`
            )
        }  
    }

    return (
        <Pagination className="justify-end pr-4">
            <PaginationContent>
                <PaginationItem >
                    <PaginationPrevious onClick={previousPage} text="Anterior" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext onClick={nextPage} text="Próximo" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
