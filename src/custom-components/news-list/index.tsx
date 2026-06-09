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
                contents!.map((noticies: News) => <CardNewsComponent key={noticies.id} username={noticies.owner_username} title={noticies.title} />)
            }
        </div>
    )
}