# Tienda Online
Este es un proyecto de una tienda online desarrollado con React y Node.js. Proporciona una plataforma para que los usuarios puedan comprar productos y realizar pedidos en línea.
## Tecnologias usadas
Para este proyecto se ha trabajado con React que es una tecnologia que nos permite combinar archivos html y javascript para hacer una pagina más dinámica además de utilizarse una base de datos SQL con MySQL usando sequelize.

## Características
Registro de usuarios
``` js
const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.post(API_URL+'/users/createUser', formValues);
      console.log(response.data);
      setIsLoading(false);
      navigate('/login')

    } catch (error) {
      console.error(error);
      setError(error.message);
      setIsLoading(false);
    }
  };

```
### Inicio de sesión de usuarios
``` js
 const login = async (user) => {
        const res = await axios.post(API_URL + "/users/login", user);
    
        //guardamos el token en el estado
        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
    
        //guardamos el token en el local storage
        if (res.data) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
        }
      };
```
### Detalles de productos individuales
``` js
 return (
    <div className="product-container">
      <img src={product.img} alt="Portada juego" />
      <p>{product.name}</p>
      <p>{product.price} €</p>
      <p>{product.description}</p>
      <div className="youtube-video">
        {product.trailer && <YouTube videoId={product.trailer} />}
      </div>
      {token && (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
};

```
### Agregar productos al carrito de compras
``` js
export const OrdersProvider = ({ children }) => {
  const createOrder = async (order) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const ProductIds = order.map(product => product.id);
    try {
      await axios.post(
        API_URL + "/orders/newOrder",
        { ProductId: ProductIds },
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
```
### Realizar pedidos
``` js 
    <div className="cart-container">
      {cart.length <= 0 ? (
        <span className="empty-cart-message">No tienes ningún producto añadido</span>
      ) : (
        <>
          {cart.map((cartItem, index) => (
            <div className="cart-item" key={index}>
              <span>{cartItem.name}</span>
              <span>{cartItem.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="cart-buttons">
            <button onClick={() => clearCart()}>Clear cart</button>
            <button onClick={() => createNewOrder()}>Create Order</button>
          </div>
        </>
      )}
    </div>
```
### Historial de pedidos de usuarios
``` js
  return (
    <div className="perfil-container">
      <h2>Perfil de Usuario</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <h3>Pedidos:</h3>
  
      <ul>
        {user.Orders?.map((order) => (
          <li key={order.id}>
            <h4>Orden ID: {order.id}</h4>
            <p>Fecha: {order.createdAt}</p>
            <p>Productos:</p>
            <ul>
              {order.Products.map((product) => (
                <li key={product.id}>
                  Nombre: {product.name}, Precio: {product.price}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Perfil;

```
## Contribución
Si deseas contribuir a este proyecto, sigue los siguientes pasos:

Haz un fork del repositorio.
Crea una rama para tu función o corrección de errores: git checkout -b tu-rama.
Realiza tus modificaciones y realiza confirmaciones significativas.
Publica tus cambios en tu repositorio: git push origin tu-rama.
Abre una solicitud de extracción en el repositorio original.
## Licencia
Este proyecto está bajo la Licencia Adrian License.

