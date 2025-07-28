export { };

declare global {
    type IListHeader = {
        uuid: string;
        id: number;
        title: string;
    }

    interface IListItem {
        id: number
        name: string
        check: boolean
    }

    type IList = {
        uuid: string;
        owner?: string
        title: string
        guests: string[]
        items: IListItem[]
    }

}