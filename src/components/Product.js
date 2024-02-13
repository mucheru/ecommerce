import React, { Component } from 'react'
import {actFetchProductsRequest,AddCart} from '../actions'
import {connect} from 'react-redux';
export class Product extends Component {
    constructor(props) {
        super(props)
       
    }

    componentDidMount(){
        this.props.actFetchProductsRequest();
    }
    
    render() {
        const {_products} = this.props._products;
        if(_products.length>0){
           
           return (
                <div className="row" style={{marginTop:'10px'}}>
                    <div className="col-md-5">
                        <div className="row">
                            {
                                _products.map((item,index)=>(
                                    <div key={index} className="col-md-2" style={{marginBottom:'10px',marginLeft:'40px'}} >
                                        <img src={item.image} className="img-resposive" style={{width:'100px',height:'80px'}}/>
                                        <h5>{item.name}</h5>
                                        <h5>@{item.price}  ksh per quantity</h5>
                                        <span className="badge badge-primary" style={{cursor:'pointer', fontWeight:'bold'}} onClick={()=>this.props.AddCart(item)}>Add Cart</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ) 
        }
        return(
            <div className="row">
                <h2>Loading...!</h2>
            </div>
        )
        
    }
}

const mapStateToProps = state =>{
    return {
         _products: state._todoProduct,
       };
}
function mapDispatchToProps(dispatch){
    return{
        actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
        AddCart:item=>dispatch(AddCart(item))
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product)
