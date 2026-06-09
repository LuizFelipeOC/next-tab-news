import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { News } from "@/src/types";
import { CardNewsComponent } from "..";

export interface NewsListProps {
    contents: News[]
}

export default function NewsList({ contents }: NewsListProps) {
    return (
        <div className="p-4">
            {
                contents!.map((news: News) => <CardNewsComponent key={news.id} news={news} />)
            }
        </div>
    )
}