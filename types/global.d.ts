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

    type TProviderData = {
        providerId: string;
        uid: string;
        displayName: string;
        email: string;
        phoneNumber: string | null;
        photoURL: string;
    };

    type TStsTokenManager = {
        refreshToken: string;
        accessToken: string;
        expirationTime: number;
    };

    type TFirebaseUser = {
        uid: string;
        email: string;
        emailVerified: boolean;
        displayName: string;
        isAnonymous: boolean;
        photoURL: string;
        providerData: TProviderData[];
      //  stsTokenManager: TStsTokenManager;
      //  createdAt: string;
      //  lastLoginAt: string;
      //  apiKey: string;
      //  appName: string;
    };

    const user: FirebaseUser = {
        uid: "kPx2IKUaqXS4xHG0wShQSRhrUAD3",
        email: "walterfcarvalho@gmail.com",
        emailVerified: true,
        displayName: "Valter Freire de Carvalho",
        isAnonymous: false,
        photoURL: "https://lh3.googleusercontent.com/a-/AOh14Gg6pr7K41NzV5D9wYVIdaRemJtA8-cuca4z9QabpNk=s96-c",
        providerData: [
            {
                providerId: "google.com",
                uid: "103517091684148537061",
                displayName: "Valter Carvalho (walterfcarvalho)",
                email: "walterfcarvalho@gmail.com",
                phoneNumber: null,
                photoURL: "https://lh3.googleusercontent.com/a/ACg8ocI032ZJNCJZDnqou8HUZA3GqHP_-6JEFPIMb4PkfLZdgmAUUBCUfg=s96-c"
            }
        ],
        stsTokenManager: {
            refreshToken: "AMf-vByJCUvgudQX9Eqf8-YU1R49FJebMP3BCreDBFn-G5vVqvsiAIlm3xJ7FtB5Cw8Be7B8vFfrEHc89isT1JLsOouwTUFM6TH4yiCbrR6iy-hWeD_6GZMIaktZbhGju2Cqt9ruOJ-Qyioc1xnNtm7bcNaKf7EN7sGRM9qC1uvGLXLItfCWqfa2nZH1OQ5ecKo8es_WpJ7Lw8HBHIOB3kir68aJfsOR8Blmes5iJab6cs6YAWRkboC5L3uiuTVkMgNEn74XDgnV1-H7lHQ4SPne8xtrrRfL-pBxqTOlo8aZfwf_jAlfDND80rVwRXdu3eulqPVSlBxIBbSorZWmHSa2FyjQa46wP77sSYcVRLHgoXGkgGpiW_--bEaVygjt4Ss8UjTt-PDcYTfa0Dg8xh93jGjuEURE1DpWbT-D62zBuF2CQI_KMy8NkEJ7uwyYhGyDOMOlOu1BEeJOPfvlqIpAQhaQfsF5-2-2b08tVcQf5RiPZdjcqzM",
            accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZkZTQwZjA0ODgxYzZhMDE2MTFlYjI4NGE0Yzk1YTI1MWU5MTEyNTAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiVmFsdGVyIEZyZWlyZSBkZSBDYXJ2YWxobyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHZzZwcjdLNDFOelY1RDl3WVZJZGFSZW1KdEE4LWN1Y2E0ejlRYWJwTms9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbGlzdGFkZWNvbXByYXMtYTY4OWMiLCJhdWQiOiJsaXN0YWRlY29tcHJhcy1hNjg5YyIsImF1dGhfdGltZSI6MTc1MzcxOTMzOSwidXNlcl9pZCI6ImtQeDJJS1VhcVhTNHhIRzB3U2hRU1JoclVBRDMiLCJzdWIiOiJrUHgySUtVYXFYUzR4SEcwd1NoUVNSaHJVQUQzIiwiaWF0IjoxNzUzNzE5MzM5LCJleHAiOjE3NTM3MjI5MzksImVtYWlsIjoid2FsdGVyZmNhcnZhbGhvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTAzNTE3MDkxNjg0MTQ4NTM3MDYxIl0sImVtYWlsIjpbIndhbHRlcmZjYXJ2YWxob0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.FVm6SAZckWhtb8qKzqPJFxbi7EDiSQIPBlhzz7Yys4Img1qYaZp9gTEZii8ZEofTS56TQs0jCMGszrohZ6Zy5erMi5SxD019Y5EB9MYruADQ8WuEt2hxvbm6XKxKHGWC9xH9iS6YO5hD2VP64DvDSlPJjKFWnPw_KVlYdyBOWKoLmoM_eg7X6mhkipTN1ps5m16iwgRNGoPv66WASgXenUbEvvor-xhIM9Vy-yXMmfGNRxfPu9rNOfLaIBFGejJ-4r__2ZrxbxvF5uGbj6-AWq6f2uJI3wLzZkmYuLHbqXweIrfNM6axQrT91FiJAaEUuRVZMxYpYy2zuYEvMTUaDA",
            expirationTime: 1753722940049
        },
        createdAt: "1624408816341",
        lastLoginAt: "1753719339966",
        apiKey: "AIzaSyCp21aNjs1Vsb34F7WBi-cDsLyU25V4EzU",
        appName: "[DEFAULT]"
    };



}
