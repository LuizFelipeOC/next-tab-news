'use client';


import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CATEGORY_FILTER_OPTIONS } from "@/src/constants";
import { Category } from "@/src/types";
import { useRouter, useSearchParams } from "next/navigation";

export default function CaegoriesFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const selectedCategory =
        searchParams.get("category") ?? CATEGORY_FILTER_OPTIONS[0].value;
    console.log(selectedCategory)

    const setSelectedCategory = (value: Category) => {
        router.push(
            `/tabnews?category=${value.value}`
        )
    }

    return (
        <div className="p-4 gap-4 flex">
            {
                CATEGORY_FILTER_OPTIONS.map((category) =>
                    <Badge
                        key={category.id}
                        variant='outline'
                        className={cn(
                            "cursor-pointer transition-colors",
                            category?.value === selectedCategory &&
                            "bg-primary text-primary-foreground border-primary"
                        )}
                        onClick={() => setSelectedCategory({
                            value: category.value,
                            name: category.name,
                            id: category.id
                        })}>
                        {category.name}
                    </Badge>
                )
            }
        </div>
    )
}