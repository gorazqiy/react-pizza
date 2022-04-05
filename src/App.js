import React from "react";

import { Routes, Route } from 'react-router-dom';

import { Header } from "./components";
import { Home, Cart } from "./pages";


function App() {


  // const state = useSelector((state) => return { items: state.pizzas.items, sortBy: state.filters.sortBy,}
  // const { items } = useSelector(({ pizzas, filters }) => {
  //   return {
  //     items: pizzas.items,
  //   }
  // });




  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}



export default App;








// class App extends React.Component {

//   componentDidMount() {


//     axios.get("https://621510a4cdb9d09717ac4a98.mockapi.io/pizzas")
//       .then(({ data }) => {
//         this.props.setPizzas(data)
//       })
//   }


//   render() {

//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Routes>
//             <Route path='/' element={<Home items={this.props.items} />} />
//             <Route path='/cart' element={<Cart />} />
//           </Routes>
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(App);

