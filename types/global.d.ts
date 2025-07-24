export { };

declare global {
    type listHeader = {
        id: string
        title: string
    }

    interface IListItem {
        id:number
        name:string
        check: boolean
    }

    type IList = {
        owner?: string
        id: string
        title: string
        guests:string[]
        items: IListItem[]
    }
}