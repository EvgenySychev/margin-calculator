import Header from './Header'
import Footer from './Footer'

const Layout = ({children}: any) => {

    return <div style={{
        backgroundColor: "lightblue",
        minHeight: "98vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif"
    }}>
        <Header/>
        {
            children
        }
        <Footer/>
    </div>
}

export default Layout;