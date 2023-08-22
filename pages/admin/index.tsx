import { useRouter } from 'next/router'
import { useEffect } from 'react'

const admin = (): void => {
    const router = useRouter()

    useEffect(() => {
        const isAuth = sessionStorage.getItem('auth')
        if (isAuth !== 'true') {
            router.push('/admin/login')
        } else {
            router.push('/admin/juaniylulicom')
        }
    }, [])
}

export default admin
