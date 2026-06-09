
export interface AvatarComponentProps { 
    username: string;
}

export default function AvatarComponent({ ...props }: AvatarComponentProps) {    
    return (
        <div className="bg-primary h-[46px] w-[46px] rounded-full items-center justify-center flex text-muted" >
            <span>
                {props.username && (
                    props.username
                )}
            </span>
        </div>
    )
}