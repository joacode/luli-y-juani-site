/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app'
import Head from 'next/head'
import React, { ReactElement, useEffect, useState } from 'react'
import '../styles/globals.css'
import '../styles/styles.css'
import 'rsuite/dist/rsuite.min.css'
import AppContext, { WindowDimensions } from 'src/contexts/AppContext'

export default function MyApp(props): ReactElement {
    const { Component, pageProps } = props

    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
        width: 320,
        height: 669,
    })
    const [scrollOffset, setScrollOffset] = useState(0)

    useEffect(() => {
        const { innerWidth: width, innerHeight: height } = window
        setWindowDimensions({
            width,
            height,
        })
    }, [])

    useEffect(() => {
        const onScroll = (): void => setScrollOffset(window.pageYOffset)
        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true })
        return (): void => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <Head>
                <title>Juani & Luli</title>
            </Head>
            <AppContext.Provider
                value={{
                    windowDimensions,
                    scrollOffset,
                    setScrollOffset,
                }}
            >
                <Component {...pageProps} />
            </AppContext.Provider>
        </>
    )
}

MyApp.getInitialProps = async (ctx): Promise<Record<string, string>> => {
    const pageProps = await App.getInitialProps(ctx)

    return {
        ...pageProps,
    }
}
