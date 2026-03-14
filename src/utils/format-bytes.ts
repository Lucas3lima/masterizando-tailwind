export function formatBytes(bytes: number){
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

    let value = bytes
    let unitIdex = 0

    while(value >= 1024 && unitIdex < units.length -1) {
        value /= 1024
        unitIdex++
    }

    return `${value.toFixed(1)}${units[unitIdex]}`
}