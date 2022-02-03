import "./nav.css";

const Nav = () => {
   return (
      <div className="block">
         <h1>Олег Марков</h1>
         <ul>
            <li>
               <a href="https://getbootstrap.com/docs/4.0/examples/pricing/">Главная</a>
            </li>
            <li>
               <a href="https://getbootstrap.com/docs/4.0/examples/pricing/">Обо мне</a>
            </li>
            <li>
               <a href="https://getbootstrap.com/docs/4.0/examples/pricing/">Связаться</a>
            </li>
         </ul>
      </div>
   );
};

export default Nav;
