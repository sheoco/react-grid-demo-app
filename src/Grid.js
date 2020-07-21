import React from 'react'
import {Responsive,WidthProvider  } from 'react-grid-layout';
import Card from './Card.js';


const ResponsiveGridLayout = WidthProvider(Responsive);

class Grid extends React.PureComponent{

    constructor(){
        super()
        this.state={
            layout_arr:[
                {key:1,content:'drag me!', x:0, y:0, w:2, h:2},
                {key:2,content:'drag me!', x:2, y:0, w:2, h:2},
                {key:3,content:'drag me!', x:4, y:0, w:2, h:2},
                {key:4,content:'drag me!', x:6, y:0, w:2, h:2},
            ],
            item_count:4,
            box_content:'',
            box_row:'',
            box_col:'',
            box_width:'',
            box_height:'',
        }

        this.onAddItemHandler = this.onAddItemHandler.bind(this)
        this.onFormFieldChangeHandler = this.onFormFieldChangeHandler.bind(this)
    }

    onFormFieldChangeHandler = (event)=>{
        
        const target = event.target;
        this.setState({
			[target.name]:target.value
		})
    }

    onAddItemHandler = (event)=>{

        if(this.state.box_content !=='' && this.state.box_row !=='' && this.state.box_col !=='' && this.state.box_width !=='' && this.state.box_height !=='')
        {
            const content = this.state.box_content
            const row = parseInt(this.state.box_row)
            const col = parseInt(this.state.box_col) 
            const width = parseInt(this.state.box_width)
            const height = parseInt(this.state.box_height)
            const item_count = this.state.item_count+1 

           
            this.setState({
                layout_arr: this.state.layout_arr.concat({key: item_count,content:content, x:col, y:row, w:width, h:height}),
                item_count:item_count,
        
            })

        }else{

            alert('Error');
        }

        event.preventDefault();

    }

    onRemoveItemHandler = (item_key)=>{

        const new_layout_arr = this.state.layout_arr.filter(item => item.key !== item_key);
        this.setState({ layout_arr: new_layout_arr });
    }

   
    render(){

        var div_style={
            background: '#fff',
            padding:0,
            borderRadius:5,
        }
        
        var grid =
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2">
                            <AddCard onFormFieldChangeHandler={this.onFormFieldChangeHandler} onAddItemHandler={this.onAddItemHandler}/>
                        </div>
                        <div class="col">
                                    <br/>
                                <ResponsiveGridLayout 
                                    className="layout" 
                                    breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                                    cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                                    rowHeight={100}
                                    isDraggable={true}
                                    isResizable={true}
                                    verticalCompact={true}
                                    compactType=''
                                    useCSSTransforms={false}
                                    preventCollision={false}
                                

                                >
                                    {this.state.layout_arr.map((arr)=>
                                        
                                        <div style={div_style} key={arr.key}  data-grid={{x:arr.x, y: arr.y, w: arr.w, h: arr.h}}><Card card_key={arr.key} card_content={arr.content} card_remove={this.onRemoveItemHandler.bind(this,arr.key)}/></div>
                                        
                                    )}
                                </ResponsiveGridLayout>
                        
                        </div>
                    </div>
                </div>
                
                
                

        return (grid)


    }





}


const AddCard = (props)=>{

    var div_style={
        background: '#fff',
        padding:10,
        
    }

    var str =<><br/>
        <div style={div_style}>
            <h5>Add New Card</h5>
            <hr/>
          <form onSubmit={props.onAddItemHandler}>
                <div class="form-group">
                    <label for="">Content</label>
                    <input type="text" class="form-control" name="box_content" placeholder="Enter Box Content.." onChange={props.onFormFieldChangeHandler} required/>
                 </div>
                 <div class="form-group">
                    <label for="">Row</label>
                    <input type="number" class="form-control" name="box_row" placeholder="Enter Row"  onChange={props.onFormFieldChangeHandler} min="0" required/>
                 </div>
                 <div class="form-group">
                    <label for="">Col</label>
                    <input type="number" class="form-control" name="box_col" placeholder="Enter Column"  onChange={props.onFormFieldChangeHandler} min="0" max="12" required/>
                 </div>
                 <div class="form-group">
                    <label for="">Width</label>
                    <input type="number" class="form-control" name="box_width" placeholder="Enter Width"  onChange={props.onFormFieldChangeHandler} min="0" max="12" required/>
                 </div>
                 <div class="form-group">
                    <label for="">Height</label>
                    <input type="number" class="form-control" name="box_height" placeholder="Enter Height"  onChange={props.onFormFieldChangeHandler} min="0" max="6" required/>
                 </div>
                
                <button type="submit" class="btn btn-primary btn-block">Add</button>
            </form>
        </div>
        </>

    return str

}


export default Grid;