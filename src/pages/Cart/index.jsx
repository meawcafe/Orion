const Cart = ({ show_cart, setShowCart }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: show_cart ? 0 : '100vw',
        opacity: show_cart ? 1 : 0,

        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 255)',

        transition: '0.3s ease-in-out',
      }}
    >
      <h1>Cart</h1>
    </div>
  )
}

export default Cart;