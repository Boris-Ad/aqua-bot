export const colorActiveLink = (path1: string, path2: string) : string | undefined => {
    const check = Boolean(path1.split('/')[2] === path2.split('/')[2]);
    return check ? 'text-amber-500' : undefined;
}