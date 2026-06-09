import { CategoriesFilterComponente, NewsListComponent } from "@/src/custom-components";
import { News } from "@/src/types";
import { Suspense } from "react";

async function getNews(category: string): Promise<News[]> {
    const res = await fetch(`https://www.tabnews.com.br/api/v1/contents?strategy=${category}`, {
        method: 'GET',
    })

    return res.json();
}

export default async function HomePage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string }>;
}) {
    const { category } = await searchParams;    
    const contents = await getNews(category as string);

    console.log(contents)

    return (
        <>
            <CategoriesFilterComponente />

            <Suspense>
                <NewsListComponent contents={contents} />
            </Suspense>
        </>
    )
}