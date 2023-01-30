
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="headerInfo">
            <h3 className="text-uppercase">Pizza blues</h3>
            <p className="opacity-5">Пиццерия твоей мечты!</p>
          </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
        <img width={18} height={18} src="/img/cart.svg" />
        <span>1205 tenge.</span>
        </li>
        <li>
        <img width={18} height={18} src="/img/User.svg" />

        </li>
      </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>Все пиццы</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ->" />
          </div>
        </div>

          <div className="d-flex">

              <div className="card">  
              <img width={133} height={112} src="/img/1.jpg" alt="" />
              <h5>Пицца Ассорти</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column" >
                  <span>Цена:</span>
                  <b>3500 tenge</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/Vector.svg" alt="Plus" />
                  
                </button>
              </div>
            </div>


            <div className="card">  
              <img width={133} height={112} src="/img/2.jpg" alt="" />
              <h5>Пицца Хуторянка</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column" >
                  <span>Цена:</span>
                  <b>3500 tenge</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/Vector.svg" alt="Plus" />
                  
                </button>
              </div>
            </div>

            <div className="card">  
              <img width={133} height={112} src="/img/3.jpg" alt="" />
              <h5>Пицца Столичная</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column" >
                  <span>Цена:</span>
                  <b>3500 tenge</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/Vector.svg" alt="Plus" />
                  
                </button>
              </div>
            </div>

            <div className="card">  
              <img width={133} height={112} src="/img/4.jpg" alt="" />
              <h5>Пицца Пепперони</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column" >
                  <span>Цена:</span>
                  <b>3500 tenge</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/Vector.svg" alt="Plus" />
                  
                </button>
              </div>
            </div>


          </div>

      </div>
    </div>
  );
}

export default App;
