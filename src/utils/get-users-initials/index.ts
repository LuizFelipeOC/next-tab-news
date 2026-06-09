export function getAvatarInitials(name: string): string {
    const parts = name.trim().split(/\s+/);

    return parts
        .slice(0, 2)
        .map(part => part[0])
        .join('')
        .toUpperCase();
}