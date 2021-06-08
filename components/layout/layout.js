import Header from './header';
import Footer from './footer';

class Layout extends React.Component {
    render() {
        const { children } = this.props

        return (
            <>
                <Header />
                {children}
                <Footer />
            </>
        )
    }
}

export default Layout;