import { usePathname } from "next/navigation";


type PageName = 'home' | 'faq' | 'reviews' | 'login' | 'signup'

const useCurrentPage = (): PageName => {

    const pathname = usePathname();

    if (pathname === '/'){
        return 'home';
    }
    else if(pathname === '/reviews'){
        return 'reviews'
    }
    else if(pathname === '/login'){
        return 'login';
    }
    else if (pathname === '/signup') {
        return 'signup'
    }

    return 'home'
}


export default useCurrentPage
