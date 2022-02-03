import "./nav.css";

const Nav = () => {
   return (
      <div className="block">
         <h1>Олег Марков</h1>
         <ul>
            <li>
               <a href="#">Главная</a>
            </li>
            <li>
               <a href="#">Обо мне</a>
            </li>
            <li>
               <a href="#">Связаться</a>
            </li>
         </ul>
      </div>
   );
};

export default Nav;
