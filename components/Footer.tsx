import { FooterContacts } from './FooterContact'

const Footer = () => {

    return <footer style={{
        display: "flex",
        width: "100%",
        height: "120px",
        backgroundColor: "gray",
        justifyContent: "space-around",
        color: "darkslateblue"
    }}>
        <FooterContacts/>
        <span style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "14px"
        }}>
            Приложение предназначено для внутреннего использования
        </span>
    </footer>
}

export default Footer;