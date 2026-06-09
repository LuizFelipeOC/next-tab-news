import { Card, CardTitle } from "@/components/ui/card";
import { AvatarComponent } from "..";
import { News } from "@/src/types";
import { formatDate } from "@/src/utils";

export interface CardNewsComponentProps {
    news: News
}

export default function CardNewsComponent({ ...props }: CardNewsComponentProps) {
    return (
        <Card className="p-2 m-2 cursor-pointer hover:bg-primary-foreground">
            <CardTitle className="p-2 flex items-center gap-4 font-semibold">
                <AvatarComponent username={props.news.owner_username} />
                <div className="flex flex-col w-full">
                    <div className="flex justify-between w-full items-center">
                        {props.news.title}
                        <div className="font-medium text-sm text-accent-foreground">
                            {formatDate(props.news.published_at)}
                        </div>
                    </div>
                    <div className="font-normal text-sm text-accent-foreground">
                        Por {props.news.owner_username}
                    </div>
                </div>
            </CardTitle>
        </Card>
    )
}