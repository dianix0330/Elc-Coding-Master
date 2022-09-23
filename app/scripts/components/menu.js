/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
 import React from 'react'

 class Menu extends React.Component {
   /**
    * Main constructor for the Menu Class
    * @memberof Menu
    */
   constructor(props) {
     super(props)
     this.state = {
       showingSearch: false
     }
     this.onSearch = this.onSearch.bind(this)
     this.showSearchContainer = this.showSearchContainer.bind(this)
   }
 
   /**
    * Shows or hides the search container
    * @memberof Menu
    * @param e [Object] - the event from a click handler
    */
   showSearchContainer(e, isShow) {
     e.preventDefault()
     this.setState({
       showingSearch: isShow
     })
     if (isShow === false) {
       this.props.onSearchValueChange('')
     }
   }
 
   /**
    * Calls upon search change
    * @memberof Menu
    * @param e [Object] - the event from a text change handler
    */
   onSearch(e) {
     // Start Here
     this.props.onSearchValueChange(e.target.value)
   }
 
   /**
    * Renders the default app in the window, we have assigned this to an element called root.
    *
    * @returns JSX
    * @memberof App
    */
   render() {
     return (
       <header className="menu">
         <div className="menu__container">
           <div className="menu__container__holder">
             <h1>ELC</h1>
             <nav>
               <a href="#" className="nav__item">
                 HOLIDAY
               </a>
               <a href="#" className="nav__item">
                 WHAT'S NEW
               </a>
               <a href="#" className="nav__item">
                 PRODUCTS
               </a>
               <a href="#" className="nav__item">
                 BESTSELLERS
               </a>
               <a href="#" className="nav__item">
                 GOODBYES
               </a>
               <a href="#" className="nav__item">
                 STORES
               </a>
               <a href="#" className="nav-item">
                 INSPIRATION
               </a>
             </nav>
           </div>
           <div className="menu__input-search">
             <a href="#" className="search__nav__item">
               <div
                 className={
                   (this.state.showingSearch ? 'item-show ' : '') +
                   'search-container'
                 }
               >
                 <input
                   type="text"
                   value={this.props.searchValue}
                   onChange={this.onSearch}
                 />
                 <a href="#" onClick={e => this.showSearchContainer(e, false)}>
                   <i className="material-icons close">close</i>
                 </a>
               </div>
               {!this.state.showingSearch && (
                 <i
                   className="material-icons search"
                   onClick={e => {
                     this.showSearchContainer(e, true)
                   }}
                 >
                   search
                 </i>
               )}
             </a>
           </div>
         </div>
       </header>
     )
   }
 }
 
 // Export out the React Component
 module.exports = Menu