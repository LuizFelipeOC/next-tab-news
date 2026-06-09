import { Card, CardTitle } from "@/components/ui/card";
import { AvatarComponent } from "..";

export interface CardNewsComponentProps {
    username: string
    title: string
}

export default function CardNewsComponent({...props} : CardNewsComponentProps) {
    return (
        <Card className="p-2 m-2">
            <CardTitle className="p-2 flex items-center gap-4 font-semibold">
                <AvatarComponent username={props.username} />
                {props.title}
            </CardTitle>
        </Card>
    )
}