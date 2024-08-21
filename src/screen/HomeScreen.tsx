import { Component } from "react";

interface Product {
  id: number;
  title: string;
}

interface IProms {
  int: number;
}

interface IState {
  count: number;
  product: Product[];
}

class HomeScreen extends Component<IProms, IState> {
  constructor(props: IProms) {
    super(props);
    this.state = {
      count: 0,
      product: []
    };
  }

  componentDidMount(): void {
    console.log("componentDidMount")
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        
        this.setState({ product: data.products });
      });
  }
  componentDidUpdate(): void {
    console.log("componentDidUpdate")
      
  }
  componentWillUnmount(): void {
    console.log("component Will Unmount")
      
  }

  render() {
    console.log("render()")
    return (
      <div className="flex flex-col space-y-3 p-4">
        <h1>Home Screen</h1>
        <h4>Count: {this.state.count}</h4>
        {this.state.product.map(({ title, id }: Product) => (
          <h4 key={id}>{title}</h4>
        ))}
        <button
          className="bg-black rounded-sm p-5 text-white"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Add in Count
        </button>
      </div>
    );
  }
}

export default HomeScreen;
