import Footer from 'components/footer/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Container from '../components/ui/Container'
function RootLayout() {
    return (
        <div>
            <Container>
                <Header />

                <div style={{marginBottom : "25px"}}>
                    <Outlet />
                </div>

                <Footer />
            </Container>
        </div>
    )
}

export default RootLayout