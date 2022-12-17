

export const sortCapacity = (a: string, b: string) => {
    //「1.5」にも対応するため単位を取り除いて10倍する
    const na = Number(a.substring(0, a.length - 2)) * 10;
    const nb = Number(b.substring(0, b.length - 2)) * 10;
    
    return na - nb;
}

export const sortModel = (a: string, b: string) => {
    const sa = String(a).replace(/(\d+)/g, m => m.padStart(30, '0'));
    const sb = String(b).replace(/(\d+)/g, m => m.padStart(30, '0'));
    return sa < sb ? -1 : sa > sb ? 1 : 0;
}