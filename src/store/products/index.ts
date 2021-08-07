const initialState = {
  data: [{
      id:1,
      name:"papaya",
      price:10,
      stock:10
  }],
};

const productReducer = (
  prevState = initialState,
  action: { payload: any; type: string }
) => {
  switch (action.type) {
    case "PRODUCT_CREATE":
      return {
        data: [...prevState.data, action.payload],
      };
    case "PRODUCT_DELETE":
      return {
        data: prevState.data.filter((u: any) => u.id !== action.payload),
      };
    case "PRODUCT_UPDATE":
      return {
        data: prevState.data.map((u: any) => {
          if (u.id === action.payload.id) return action.payload;
          return u;
        }),
      };
    default:
      return prevState;
  }
};
export default productReducer;
