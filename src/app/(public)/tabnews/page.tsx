import { CategoriesFilterComponente, NewsListComponent } from "@/src/custom-components";
import CustomPagination from "@/src/custom-components/paginations";
import { News } from "@/src/types";
import { Suspense } from "react";

async function getNews(category: string, page: number): Promise<News[]> {
    const res = await fetch(`https://www.tabnews.com.br/api/v1/contents?strategy=${category}&page=${page}`, {
        method: 'GET',
    })

    return res.json();
}

export default async function HomePage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string, page: 1 }>;
}) {
    const { category, page } = await searchParams;
    const contents = await getNews(category as string, page);

    return (
        <>
            <CategoriesFilterComponente />

            <Suspense>
                <CustomPagination />
                <NewsListComponent contents={contents} />
            </Suspense>
        </>
    )
}