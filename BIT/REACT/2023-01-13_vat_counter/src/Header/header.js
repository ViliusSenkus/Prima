const Header = () => {

    const colors=['yellow','green', 'red'];
    const logo = colors.map((value, index) => <div key={index} id={value}></div>)

   
    return (
        <header>
            <div className="flexRow">
                {logo}
            </div>
            <h1>PVM skaičiuoklė</h1>

        </header>
    )
}

export default Header;