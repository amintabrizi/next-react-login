import { Nav } from 'react-bootstrap'
import Link from 'next/link'


function NavbarComponent() {
    return (
        <>
            <Nav>
                <Link href="/"><Nav.Link href="/">Home</Nav.Link></Link>
                <Link href="/login"><Nav.Link href="/login">Login</Nav.Link></Link>
                <Link href="/dashboard"><Nav.Link href="/dashboard">Dashboard</Nav.Link></Link>
                <Link href="/test"><Nav.Link href="/test">test</Nav.Link></Link>
            </Nav>
        </>
    )
}

export default NavbarComponent
