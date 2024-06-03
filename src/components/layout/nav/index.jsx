import './style.scss'

function Nav(params) {
    return(
        <header>
        <nav>
            <div className="logo">
                <a href="./index.html"><i className="fa-solid fa-cloud"></i>
                    <h1>CloudBudget</h1></a>
            </div>
            <ul>
                <li><a href="#">ОБЗОР</a></li>
                <li><a href="#">ОСОБЕННОСТИ</a></li>
                <li><a href="#">ТЕХНОЛОГИЯ</a></li>
                <li><a href="#">КОНТАКТЫ</a></li>
                <li><a href="#">ВОЙТИ</a></li>
            </ul>
            <form action="">
                <button>ВХОД</button>
            </form>
        </nav>
        <div className="showcase">
            <h1>CloudBudget</h1>
            <p>Управление бюджетом в для всех. 
                Всего 69,95 € в месяц после 7-дневной 
                пробной версии за 4,99 €</p>
            <button>ПОПРОБОВАТЬ</button>
        </div>
    </header>
    )
}


export default Nav