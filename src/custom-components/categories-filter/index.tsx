'use client';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CATEGORY_FILTER_OPTIONS } from "@/src/constants";
import { Category } from "@/src/types";
import { useCallback, useState } from "react";

export default function CaegoriesFilter() {
    const [selectedCategory, setCategory] = useState<Category | null>(CATEGORY_FILTER_OPTIONS[0]);

    const setSelectedCategory = (value: Category) => {
        setCategory(value);
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
                            category?.id === selectedCategory?.id &&
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