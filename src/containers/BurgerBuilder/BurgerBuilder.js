import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 1.2,
    cheese: 0.8,
    meat: 1.1
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable:false,
        purchasing: false

    }

    handleUpdatePurchase (newPrice){ 
        newPrice>4? this.setState({purchasable:true})  : this.setState({purchasable:false})            
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
        this.handleUpdatePurchase(newPrice);
    }

    removeIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
        this.handleUpdatePurchase(newPrice);
    }

    handlerOrderNow = () =>{
        this.setState({purchasing:true});
    }
    
    handleModleClosed = () =>{
        this.setState({purchasing:false});
    }


    render() { 

        const disabledInfo ={
            ...this.state.ingredients
        };

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<= 0
        }

        //{ salad: true, meat: false, ....}

        return (  
            <React.Fragment>
                <Modal 
                    show={this.state.purchasing}
                    modalClosed = {this.handleModleClosed}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients= {this.state.ingredients}/>
                <BuildControls
                    ingredientAdded ={this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled ={disabledInfo}
                    price = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    ordered = {this.handlerOrderNow}
                />
            </React.Fragment>

        );
    }
}
 
export default BurgerBuilder;