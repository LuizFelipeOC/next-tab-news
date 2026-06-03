
import Image from "next/image";

export default function Header() {
    return (
        <div className="p-2 flex items-center gap-2">
            <div className="bg-primary w-[72px] h-[72px] justify-center flex p-4 rounded-full">
                <Image src='/icons/icon-app.svg' alt="Logo Page" width={52} height={52} />
            </div>

            <div>
                <h1 className="text-lg font-bold">Next Tab News</h1>
                <p className="text-sm font-medium">Seu canal de noticia tech</p>
            </div>
        </div>
    )
}