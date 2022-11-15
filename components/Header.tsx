
const Header = () => {

    return <header style={{
        display: "flex",
        width: "100%",
        height: "50px",
        color: "darkslateblue",
        justifyContent: "center"
    }}>
        <span style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "16px"
        }}>
            Калькулятор расчета маржи v 1.0
        </span>
    </header>
}

export default Header;